# Dockerized Flask App (demo / work in progress)

```bash
docker compose up --build        # then open http://localhost:8000 and /health
APP_NAME=my-api docker compose up --build   # env-var configuration
curl localhost:8000/health       # {"status":"ok"}
docker compose down
```
Without Docker: `pip install -r requirements.txt && python app.py`.
