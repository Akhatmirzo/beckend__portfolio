require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')

// connect to database
connection();

// middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));