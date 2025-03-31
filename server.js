// load environment variables
require('dotenv').config();

// import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// import middleware
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// middleware config
app.use(cors());
app.use(bodyParser.json());
app.use(logger);
app.use(errorHandler);

const port = process.env.PORT || 3000;

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});