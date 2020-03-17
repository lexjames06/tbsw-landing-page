//requirements
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');

require('dotenv').config();

//initialise app and port
const app = express();
const port = process.env.PORT || 3001;

//middleware for CORS and json parsing
app.use(cors());
app.use(express.json());

//initiliase mongoose client to interact with mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

//require mongoose schema
const listenerRouter = require('./routes/listeners');
const blogRouter = require('./routes/blogs');

//middleware for mongoose schemas
app.use('/listeners', listenerRouter);
app.use('/blogs', blogRouter);

//server connection to designated port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});