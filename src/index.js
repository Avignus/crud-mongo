const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./app/controllers/authController')(app);
// require('./app/controllers/projectController')(app);
require('./app/controllers/index')(app);
app.get('/', (req, res) => {
  res.send('Ok!');
});
app.listen(3000, console.log('listening on port 3000'));
