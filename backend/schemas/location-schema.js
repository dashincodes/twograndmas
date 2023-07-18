const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationsSchema = new Schema({
    date: {type: String, required: true},
    address: {type: String, required: true},
    time: {type: String, required: true},

});

module.exports = mongoose.model("Location", locationsSchema);