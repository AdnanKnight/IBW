// Imports
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
cookieParser()

// Models
const userModel = require("../models/user")


exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json({ success: false, message: 'Email already registered' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, name, email }, process.env.JWT_KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'lax' });

        res.status(201).json({ success: true, message: 'Signup successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Incorrect Email or password.' });
        }

        // Direct string comparison (not secure for production)
        if (user.password !== password) {
            return res.status(400).json({ success: false, message: 'Incorrect Email or password.' });
        }

        const token = jwt.sign(
            { id: user._id, name: user.name, email },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        });

        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

exports.logout = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if (!token || token === "") {
            res.status(200).json({ success: false, message: "Already Loggedout" })
        }

        res.cookie('token', '', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            expires: new Date(0)
        });

        res.status(200).json({ success: true, message: "Successfully Logout" })
    }
    catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Failed to logout' });
    }
}

exports.authCheck = async (req, res, next) => {
    let token = req.cookies?.token

    if (!token) {
        return res.json({userOnline: false, message: "You are currently not signedin or haven't signedup yet."})
    }
    else {
        return res.json({userOnline: true, message: "You are loggedIn and Online."})
    }
}