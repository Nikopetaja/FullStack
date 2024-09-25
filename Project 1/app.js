const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // for parsing JSON
app.use(express.static('public')); // for serving static files

// Setting up view engine for rendering HTML pages
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load the JSON guestbook data
const loadMessages = () => {
  const data = fs.readFileSync('guestbook.json');
  return JSON.parse(data);
};

// Save messages to JSON file
const saveMessage = (newMessage) => {
  const messages = loadMessages();
  messages.push(newMessage);
  fs.writeFileSync('guestbook.json', JSON.stringify(messages, null, 2));
};

// Route: Homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Route: Guestbook
app.get('/guestbook', (req, res) => {
  const messages = loadMessages();
  res.render('guestbook', { messages });
});

// Route: New Message (GET)
app.get('/newmessage', (req, res) => {
  res.render('newmessage');
});

// Route: New Message (POST)
app.post('/newmessage', (req, res) => {
  const { username, country, message } = req.body;
  if (!username || !country || !message) {
    return res.status(400).send('All fields are required!');
  }

  const newMessage = {
    id: Date.now().toString(), // Generate an ID
    username,
    country,
    date: new Date().toString(),
    message
  };

  saveMessage(newMessage);
  res.redirect('/guestbook');
});

// Route: AJAX Message (GET)
app.get('/ajaxmessage', (req, res) => {
  res.render('ajaxmessage');
});

// Route: AJAX Message (POST)
app.post('/ajaxmessage', (req, res) => {
  const { username, country, message } = req.body;
  if (!username || !country || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  const newMessage = {
    id: Date.now().toString(),
    username,
    country,
    date: new Date().toString(),
    message
  };

  saveMessage(newMessage);
  const messages = loadMessages();
  res.json(messages);
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
