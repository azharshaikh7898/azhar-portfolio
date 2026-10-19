#!/usr/bin/env python3
"""Sort files in a folder into subfolders by extension. Use --dry-run first."""
import argparse, shutil
from pathlib import Path

def organize(folder: Path, dry_run: bool) -> int:
    moved = 0
    for f in sorted(folder.iterdir()):
        if not f.is_file() or f.name.startswith("."):
            continue
        ext = f.suffix.lower().lstrip(".") or "no_extension"
        dest = folder / ext
        print(f"{'[dry-run] ' if dry_run else ''}{f.name} -> {ext}/")
        if not dry_run:
            dest.mkdir(exist_ok=True)
            shutil.move(str(f), str(dest / f.name))
        moved += 1
    return moved

if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("folder", type=Path)
    p.add_argument("--dry-run", action="store_true")
    a = p.parse_args()
    if not a.folder.is_dir():
        raise SystemExit(f"Not a directory: {a.folder}")
    print(f"Files handled: {organize(a.folder, a.dry_run)}")
