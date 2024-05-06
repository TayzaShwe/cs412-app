const express = require('express');
const bodyParser = require('body-parser');
const ps3Router = require('./routes/ps3');

const app = express();
const port = 3000;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: false }));

// Mount the ps3Router to the path /ps3
app.use('/ps3', ps3Router);

// Set the view engine to use Pug
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});