const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readJson, writeJson } = require('./utils/fileStorage');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Helper to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- Auth Routes ---

app.post('/api/auth/login', async (req, res) => {
  await delay(500);
  const { username, password } = req.body;
  // Mock login: always success if username provided
  if (username) {
    res.json({
      code: 0,
      msg: 'Success',
      data: {
        token: 'mock-token-' + Date.now(),
        user: { username, role: 'user' }
      }
    });
  } else {
    res.status(400).json({ code: 1, msg: 'Username required' });
  }
});

app.post('/api/auth/logout', async (req, res) => {
  await delay(200);
  res.json({ code: 0, msg: 'Success' });
});

// --- Profile Routes ---

app.get('/api/user/profile', async (req, res) => {
  try {
    const profile = await readJson('profile.json');
    res.json({ code: 0, data: profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.put('/api/user/profile', async (req, res) => {
  try {
    const updates = req.body;
    let profile = await readJson('profile.json');
    
    // Deep merge structure matching profileData.js
    const newProfile = {
      ...profile,
      basic: { ...profile.basic, ...(updates.basic || {}) },
      contact: { ...profile.contact, ...(updates.contact || {}) },
      extra: { ...profile.extra, ...(updates.extra || {}) }
    };

    await writeJson('profile.json', newProfile);
    res.json({ code: 0, msg: 'Updated successfully', data: newProfile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

// --- Order Routes ---

app.get('/api/user/orders', async (req, res) => {
  try {
    const orders = await readJson('orders.json');
    res.json({ code: 0, data: orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

// --- Passenger Routes ---

app.get('/api/user/passengers', async (req, res) => {
  try {
    const passengers = await readJson('passengers.json');
    res.json({ code: 0, data: passengers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.post('/api/user/passengers', async (req, res) => {
  try {
    const newPassenger = req.body;
    const passengers = await readJson('passengers.json');
    
    // Add generated fields
    newPassenger.allEncStr = 'enc-' + Date.now();
    newPassenger.total_times = "0";
    newPassenger.if_receive = newPassenger.if_receive || "N";
    newPassenger.is_active = "Y";
    newPassenger.delete_time = "";
    
    passengers.push(newPassenger);
    await writeJson('passengers.json', passengers);
    
    res.json({ code: 0, msg: 'Added successfully', data: newPassenger });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.put('/api/user/passengers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const passengers = await readJson('passengers.json');
    
    const index = passengers.findIndex(p => p.allEncStr === id);
    if (index !== -1) {
      passengers[index] = { ...passengers[index], ...updates };
      await writeJson('passengers.json', passengers);
      res.json({ code: 0, msg: 'Updated successfully', data: passengers[index] });
    } else {
      res.status(404).json({ code: 404, msg: 'Passenger not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.delete('/api/user/passengers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let passengers = await readJson('passengers.json');
    
    const newPassengers = passengers.filter(p => p.allEncStr !== id);
    if (newPassengers.length !== passengers.length) {
      await writeJson('passengers.json', newPassengers);
      res.json({ code: 0, msg: 'Deleted successfully' });
    } else {
      res.status(404).json({ code: 404, msg: 'Passenger not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
