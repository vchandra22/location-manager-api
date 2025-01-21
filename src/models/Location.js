const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama lokasi harus diisi'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Alamat harus diisi'],
        trim: true
    },
    coordinates: {
        lat: {
            type: Number,
            required: [true, 'Latitude harus diisi']
        },
        lng: {
            type: Number,
            required: [true, 'Longitude harus diisi']
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);
