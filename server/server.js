// Exports
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const path = require('path');
const cors = require('cors')
require('dotenv').config()


// Modules
const connectDB = require('./config/mongooseConfig');
connectDB();


// Models


// Routes
const productRoutes = require('./routes/products.js')
const adRoutes = require('./routes/ads.js');
const indexRoutes = require('./routes/index.js');


// Variables
const app = express()
const PORT = process.env.PORT


// Middlewares
const corsOptions = {
    origin: "http://localhost:5173", // frontend URL
    credentials: true,               // allow cookies to be sent
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));


// ✅ NEW: Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Set
app.set("view engine", "ejs")


app.get('/', (req, res, next) => {
    res.send('Hello World!')
})


// External Routes
app.use('/', indexRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ads', adRoutes);


mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => console.error('❌ MongoDB connection error:', err));