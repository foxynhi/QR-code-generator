//express app to build server
const express = require('express');

//path module to work with file paths
const path = require('path');

//middleware to parse incoming request body
const bodyParser = require('body-parser');

//middleware to enable Cross origin resource sharing
const cors = require('cors');

//route to /generate-qr
const router = require('./routes');

const app = express();

//set port to 3000 or environment port
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
