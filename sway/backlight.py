#!/usr/bin/env python3
import argparse
from decimal import Clamped

parser = argparse.ArgumentParser(
    "backlight.py", description="Adjust backlight levels for intel backlight."
)
# You can either set min or max, or change some amount. Not all.
group = parser.add_mutually_exclusive_group(required=False)
group.add_argument(
    "change",
    type=int,
    nargs="?",
    help="The mount, as a percentage, to change the brightness by. Negative numbers lower brightness.",
)
group.add_argument(
    "--max", action="store_true", help="Set the brightness to max possible."
)
group.add_argument("--off", action="store_true", help="Set the brightness to 0.")


def backlight(file_name: str) -> str:
    return f"/sys/class/backlight/intel_backlight/{file_name}"


args = parser.parse_args()

with open(backlight("max_brightness"), "r") as max_f:
    max_brightness = int(max_f.read().strip())
    with open(backlight("brightness"), "w+") as current_f:
        current_brightness = int(current_f.read().strip())
        if args.max:
            current_f.write(str(max_brightness))
        elif args.off:
            current_f.write(str(0))
        elif args.change:
            percent = int(max_brightness / 100.0)
            to = current_brightness + percent * args.change
            # Make sure number is in bounds
            # Bounding min at 1 to avoid fully shutting down screen without the off option
            to = max(min(to, max_brightness), 1)
            current_f.write(str(to))
        else:
            print(int((current_brightness / float(max_brightness)) * 100))
