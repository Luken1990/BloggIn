const express = require('express');
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const PORT = 5000 || process.env.PORT;
const connectDB = require('./config/db');
const cors = require('cors');

const usersRouter = require('./routes/usersRouter');
const blogRouter = require('./routes/blogRouter');

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello');
});

app.use('/users', usersRouter);
app.use('/blogs', blogRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Application up and running on port: http://localhost:${PORT}`);
});
module.exports = app;
