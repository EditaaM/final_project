const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectMongoDB = require('./config/db.js');
const Client = require('./models/Client.model.js');

const app = express();

const PORT = process.env.PORT || 5000;

// -- connecting DB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// -- Get all client by id
app.get('/api/clients/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (error) {
    console.log(error);
  }
});

// -- Get all clients
app.get('/api/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.log(error);
  }
});

// -- create user
app.post('/api/clients', async (req, res) => {
  try {
    const { name, email, date, time } = req.body;
    const isClientDataValid = new Client({ name, email, date, time });

    const client = await Client.create(isClientDataValid);

    res.status(201).json(client);
  } catch (error) {
    console.log(error);
  }
});

// -- update client by id
app.put('/api/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body);

    res.status(201).json(client);
  } catch (error) {
    console.log(error);
  }
});

// -- delete client
app.delete('/api/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    res.status(201).json(client);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
