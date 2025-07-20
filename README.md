# Task Tracker Example

This example provides a small table-based UI for tracking tasks over dates and a minimal Express backend to save tasks.

## Frontend

The HTML/JS files live under `src/`:

- `index.html` – table UI where rows represent dates and columns represent tasks.
- `script.js` – client-side logic to add tasks/dates and compute a simple 7‑day review cycle.

Open `index.html` directly in a browser or run the backend to serve it.

## Backend (optional)

A tiny Express server is included for storing tasks:

```
# install dependencies
npm install

# run the server
npm start
```

The server serves static files from `src/` and exposes `/api/tasks` for GET/POST operations. Data is stored in `src/tasks.json`.

Navigate to `http://localhost:3000/` after running the server.


