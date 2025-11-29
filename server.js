require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser'); 
const app = express();
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.get('/' ,(req , res) => {
    res.send("JWT Auth SPI Running")
});

app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server runnung on port ${PORT}`))

