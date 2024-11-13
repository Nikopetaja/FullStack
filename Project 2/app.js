const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();

// Middleware for JSON parsing
app.use(express.json());

// Enable CORS for all requests or specify allowed origin
app.use(cors({
    origin: 'http://80.221.151.126:3000', // Replace with your frontend URL when deployed
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow cookies if needed
  }));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// Import routes
const itemRoutes = require('./routes/items');
app.use('/api', itemRoutes);

// Server listening on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
