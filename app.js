const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://FionaLin:AtlasmongoDB2024@cluster0.jdefmrf.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('Could not connect to MongoDB:', err.message);
});

app.get('/', (req, res) => {
  res.send('{"message":"Welcome to DressStore application."}');
});

// Routes
const productsRoute = require('./routes/products');
app.use('/products', productsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
