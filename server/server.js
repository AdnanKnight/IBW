// Exports
const express = require('express')

require('dotenv').config()


// Modules
const connectDB = require('./config/mongooseConfig');
connectDB();

// Variables
const app = express()
const PORT = process.env.PORT


// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Set
app.set("view engine" , "ejs")


// Routes
app.get('/', (req, res, next) => {
    res.send('Hello World!')
})


// External Routes



app.listen(PORT, (err) => {
    if (err) {
        console.error("❌ Server failed to start:", err.message);
    } else {
        console.log("✅ The app is listening on port:", PORT);
    }
});
