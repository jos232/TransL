"""
TransL video frame extractor.

Laboratory component only.
Extracts representative frames from a video using FFmpeg.
"""

import os
import shutil
import subprocess
import tempfile
from pathlib import Path


def _find_binary(env_name, binary_name):
    """
    Resolve an FFmpeg binary from an explicit environment variable
    or from the system PATH.
    """

    configured_path = os.getenv(env_name)

    if configured_path:
        configured = Path(configured_path)

        if configured.is_file():
            return configured

        raise FileNotFoundError(
            f"{env_name} points to a missing file: {configured}"
        )

    discovered = shutil.which(binary_name)

    if discovered:
        return Path(discovered)

    raise FileNotFoundError(
        f"{binary_name} was not found on PATH. "
        f"Install {binary_name} or set {env_name}."
    )


FFMPEG_PATH = _find_binary(
    "TRANSL_FFMPEG_PATH",
    "ffmpeg",
)

FFPROBE_PATH = _find_binary(
    "TRANSL_FFPROBE_PATH",
    "ffprobe",
)

MAX_VIDEO_DURATION_SECONDS = 120
MAX_SAMPLED_FRAMES = 120


def get_video_duration(video_path):
    """Return video duration in seconds using FFprobe."""

    video_path = Path(video_path)

    command = [
        str(FFPROBE_PATH),
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        str(video_path),
    ]

    result = subprocess.run(
        command,
        check=True,
        capture_output=True,
        text=True,
    )

    try:
        duration = float(
            result.stdout.strip()
        )
    except ValueError:
        raise RuntimeError(
            "FFprobe returned an invalid video duration."
        )

    if duration <= 0:
        raise ValueError(
            "Video duration must be greater than zero."
        )

    return duration


def extract_frames(
    video_path,
    interval_seconds=1,
    max_frames=MAX_SAMPLED_FRAMES,
    max_duration_seconds=MAX_VIDEO_DURATION_SECONDS,
):
    """
    Extract frames from a video at a fixed time interval.

    The extractor refuses videos longer than max_duration_seconds
    and refuses to create more than max_frames.

    Returns:
        tuple[Path, list[Path]]:
            Temporary directory and extracted frame paths.
    """

    video_path = Path(video_path)

    if not video_path.is_file():
        raise FileNotFoundError(
            f"Video not found: {video_path}"
        )

    if not FFMPEG_PATH.is_file():
        raise FileNotFoundError(
            f"FFmpeg not found: {FFMPEG_PATH}"
        )

    if not FFPROBE_PATH.is_file():
        raise FileNotFoundError(
            f"FFprobe not found: {FFPROBE_PATH}"
        )

    if interval_seconds <= 0:
        raise ValueError(
            "interval_seconds must be greater than zero."
        )

    if max_frames <= 0:
        raise ValueError(
            "max_frames must be greater than zero."
        )

    if max_duration_seconds <= 0:
        raise ValueError(
            "max_duration_seconds must be greater than zero."
        )

    duration = get_video_duration(
        video_path
    )

    if duration > max_duration_seconds:
        raise ValueError(
            "Video duration exceeds the maximum allowed "
            f"duration of {max_duration_seconds} seconds. "
            f"Detected duration: {duration:.2f} seconds."
        )

    output_dir = Path(
        tempfile.mkdtemp(
            prefix="transl_video_frames_"
        )
    )

    output_pattern = output_dir / "frame_%06d.jpg"

    fps_filter = (
        f"fps=1/{interval_seconds}"
    )

    command = [
        str(FFMPEG_PATH),
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        str(video_path),
        "-vf",
        fps_filter,
        "-frames:v",
        str(max_frames + 1),
        "-q:v",
        "2",
        str(output_pattern),
    ]

    try:

        subprocess.run(
            command,
            check=True,
            capture_output=True,
            text=True,
        )

        frames = sorted(
            output_dir.glob("frame_*.jpg")
        )

        if not frames:
            raise RuntimeError(
                "FFmpeg completed but no frames were extracted."
            )

        if len(frames) > max_frames:
            raise ValueError(
                "Video exceeds the maximum allowed "
                f"sampled frame limit of {max_frames}."
            )

        return output_dir, frames

    except Exception:

        shutil.rmtree(
            output_dir,
            ignore_errors=True,
        )

        raise


def cleanup_frames(output_dir):
    """Remove an extracted-frame temporary directory."""

    output_dir = Path(output_dir)

    if output_dir.exists():
        shutil.rmtree(
            output_dir,
            ignore_errors=True,
        )


if __name__ == "__main__":
    print(
        "TransL video frame extractor loaded."
    )
    print(
        f"FFmpeg path: {FFMPEG_PATH}"
    )
    print(
        f"FFprobe path: {FFPROBE_PATH}"
    )
    print(
        "Maximum video duration: "
        f"{MAX_VIDEO_DURATION_SECONDS} seconds"
    )
    print(
        f"Maximum sampled frames: {MAX_SAMPLED_FRAMES}"
    )
