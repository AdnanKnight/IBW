// adController.js
const Ad = require('../models/Ad');

exports.getAll = async (req, res) => {
    const ads = await Ad.find();
    res.json(ads);
};

exports.create = async (req, res) => {
    const newAd = new Ad(req.body);
    await newAd.save();
    res.status(201).json(newAd);
};

exports.remove = async (req, res) => {
    await Ad.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
