require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectToDatabase = require("./config/database");
const routes = require('./routes');

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})