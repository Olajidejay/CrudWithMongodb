const express = require('express');
const mongoose = require ('mongoose');
const blogRouter = require('./routes/BlogRoutes');
const contactRouter = require('./routes/ContactRoutes');

const app = express();

//middleware
app.use(express.json());
app.use('/api/blogs', blogRouter);
app.use('/api/contact', contactRouter);

    

//configure mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CRUD', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});






app.listen(3001, () => {
    console.log('This App is running on port 3001')
});

module.exports = app;