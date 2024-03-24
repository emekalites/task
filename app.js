// dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db');
const { createRoomType, getAllRoomTypes } = require('./controllers/room-type');
const {
	createRoom,
	getAllRooms,
	getRoomById,
	updateRoom,
	deleteRoom,
} = require('./controllers/room');

dotenv.config();

// Connect to MongoDB
connectDB();

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/api/v1/room-types', createRoomType);
app.get('/api/v1/room-types', getAllRoomTypes);
app.post('/api/v1/rooms', createRoom);
app.get('/api/v1/rooms', getAllRooms);
app.get('/api/v1/rooms/:id', getRoomById);
app.patch('/api/v1/rooms/:id', updateRoom);
app.delete('/api/v1/rooms/:id', deleteRoom);

// Define PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
