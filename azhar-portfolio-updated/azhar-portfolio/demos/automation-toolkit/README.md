# Python & Bash Automation Toolkit (demo / work in progress)

```bash
python3 file_organizer.py ~/Downloads --dry-run   # preview, then run without --dry-run
./health_check.sh                                 # DISK_LIMIT=80 ./health_check.sh to change thresholds
python3 log_analyzer.py sample_access.log
```
Only the Python standard library is used. Sample output for the log analyzer: `Requests: 5`, `Error responses (4xx/5xx): 2`, then top status codes, paths and IPs.
Replace this paragraph with real output once you have run the tools yourself.
