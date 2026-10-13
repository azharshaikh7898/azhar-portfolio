#!/usr/bin/env bash
# Print a quick Linux system health summary. Exit 1 if disk or memory is above threshold.
set -u
DISK_LIMIT=${DISK_LIMIT:-90}; MEM_LIMIT=${MEM_LIMIT:-90}
disk=$(df / --output=pcent | tail -1 | tr -dc '0-9')
mem=$(free | awk '/Mem:/ {printf "%d", $3/$2*100}')
echo "Host:    $(hostname)"; echo "Uptime:  $(uptime -p)"
echo "Load:    $(cut -d' ' -f1-3 /proc/loadavg)"
echo "Disk /:  ${disk}% used"; echo "Memory:  ${mem}% used"
status=0
[ "$disk" -ge "$DISK_LIMIT" ] && { echo "WARN: disk above ${DISK_LIMIT}%"; status=1; }
[ "$mem" -ge "$MEM_LIMIT" ] && { echo "WARN: memory above ${MEM_LIMIT}%"; status=1; }
[ $status -eq 0 ] && echo "OK: within thresholds"
exit $status
