const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('YOUR_MONGO_DB_ATLAS_URL')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));