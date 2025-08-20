// Exports
const express = require('express')
const mongoose = require('mongoose') 
const cors = require('cors') 
require('dotenv').config()


// Modules
const connectDB = require('./config/mongooseConfig');
connectDB();

// Routes
const productRoutes = require('./routes/products.js') 
const adRoutes = require('./routes/ads.js') 

// Variables
const app = express()
const PORT = process.env.PORT


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Set
app.set("view engine", "ejs")





app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

// External Routes
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
