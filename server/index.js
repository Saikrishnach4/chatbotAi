const express = require('express');
const http = require('http');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');
const { Chat } = require('./db');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

mongoose.connect('mongodb+srv://saikrishnachippa4:saikrishna@devtown.cpfjkzk.mongodb.net/chatbot?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/send-message', async (req, res) => {
  const { role, content } = req.body;
  console.log(req.body);
  try {
    let message = {};
    if (role === 'user') {
      message.user = content;
    } else if (role === 'chatbot') {
      message.chatbot = content;
    }

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'gryphe/mythomist-7b:free',
        messages: [{ role, content }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data.choices[0].message.role);
    if (response.data.choices[0].message.role === 'assistant') {
      message.chatbot = response.data.choices[0].message.content
    }
    console.log(message)
    const newMessage = new Chat(message);
    await newMessage.save();
    console.log('Message saved to MongoDB:', message);

    res.status(200).json({ message: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error saving message to MongoDB or getting response from chatbot:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
