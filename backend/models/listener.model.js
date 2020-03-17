const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listenerSchema = new Schema({
    listenerName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        trim: true,
        minlength: 5
    }
}, {
    timestamps: true,
});

const Listener = mongoose.model('Listener', listenerSchema);

module.exports = Listener;