#!/usr/bin/env python3
"""Summarise an nginx/apache access log (common log format): status codes, top paths, top IPs."""
import re, sys
from collections import Counter

LINE = re.compile(r'^(\S+) \S+ \S+ \[[^\]]+\] "(?:\S+) (\S+)[^"]*" (\d{3})')

def main(path: str) -> None:
    ips, paths, codes, bad = Counter(), Counter(), Counter(), 0
    with open(path, encoding="utf-8", errors="replace") as fh:
        for line in fh:
            m = LINE.match(line)
            if not m:
                bad += 1
                continue
            ips[m[1]] += 1; paths[m[2]] += 1; codes[m[3]] += 1
    total = sum(codes.values())
    print(f"Requests: {total}  (unparsed lines: {bad})")
    errors = sum(v for k, v in codes.items() if k.startswith(("4", "5")))
    print(f"Error responses (4xx/5xx): {errors}")
    for title, c in (("Status codes", codes), ("Top paths", paths), ("Top IPs", ips)):
        print(f"\n{title}:")
        for k, v in c.most_common(5):
            print(f"  {k:<30} {v}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: log_analyzer.py <logfile>")
    main(sys.argv[1])
