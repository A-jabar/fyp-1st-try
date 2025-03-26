const express = require('express');
require('dotenv').config();
const db = require('./database/dbConnection');
const authRoutes = require('./routes/authRoutes');
const trafficMenRoutes = require('./routes/trafficMen');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
db.connect();
app.use('/api/auth', authRoutes);
app.use('/api/trafficMen', trafficMenRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
