import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

app.use(express.json());
app.use(express.static(__dirname));

function loadData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return { tasks: [] };
  }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/tasks', (req, res) => {
  const data = loadData();
  res.json(data.tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = req.body;
  const data = loadData();
  data.tasks.push(task);
  saveData(data);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


