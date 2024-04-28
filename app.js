const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const UserRoutes = require('./Routes/UserRoutes');
const SpamRoutes = require('./Routes/SpamRoutes');
const SearchRoutes = require('./Routes/SearchRoutes');
require('./db'); //db configuration established

const corsOptions = {
  origin: ['http://localhost/'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/user', UserRoutes);
app.use('/spam', SpamRoutes);
app.use('/search', SearchRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});