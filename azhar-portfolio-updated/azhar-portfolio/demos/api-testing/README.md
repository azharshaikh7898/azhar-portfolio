# REST API Testing Framework (demo / work in progress)

Postman collection with positive and negative tests against the public JSONPlaceholder practice API.

1. Postman: Import `collection.json` and run the collection, or
2. CLI report (needs Node.js): `npx newman run collection.json -r cli,htmlextra` (use `-r cli,json` if you skip the htmlextra plugin).

Checks: status codes (200, 201, 404), required JSON fields, array responses, echoed values.
Add a real sample report here after your first successful run.
