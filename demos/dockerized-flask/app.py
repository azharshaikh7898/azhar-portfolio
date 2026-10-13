import os
from flask import Flask, jsonify

app = Flask(__name__)
APP_NAME = os.getenv("APP_NAME", "demo-service")
APP_ENV = os.getenv("APP_ENV", "development")

@app.get("/")
def index():
    return jsonify(message=f"Hello from {APP_NAME}", environment=APP_ENV)

@app.get("/health")
def health():
    return jsonify(status="ok")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "8000")))
