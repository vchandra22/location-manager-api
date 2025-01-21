const Location = require('../models/Location');
const { validationResult } = require('express-validator');
const ApiError = require('../utils/apiError');

exports.getAllLocations = async (req, res, next) => {
    try {
        const locations = await Location.find().sort('-createdAt');
        res.json({
            status: 'success',
            data: locations
        });
    } catch (error) {
        next(error);
    }
};

exports.getLocationById = async (req, res, next) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            throw new ApiError(404, 'Lokasi tidak ditemukan');
        }
        res.json({
            status: 'success',
            data: location
        });
    } catch (error) {
        next(error);
    }
};

exports.createLocation = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ApiError(400, 'Data tidak valid', errors.array());
        }

        const location = await Location.create({
            name: req.body.name,
            address: req.body.address,
            coordinates: {
                lat: req.body.lat,
                lng: req.body.lng
            }
        });

        res.status(201).json({
            status: 'success',
            data: location
        });
    } catch (error) {
        next(error);
    }
};

exports.updateLocation = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ApiError(400, 'Data tidak valid', errors.array());
        }

        const location = await Location.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                address: req.body.address,
                coordinates: {
                    lat: req.body.lat,
                    lng: req.body.lng
                }
            },
            { new: true, runValidators: true }
        );

        if (!location) {
            throw new ApiError(404, 'Lokasi tidak ditemukan');
        }

        res.json({
            status: 'success',
            data: location
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteLocation = async (req, res, next) => {
    try {
        const location = await Location.findByIdAndDelete(req.params.id);
        if (!location) {
            throw new ApiError(404, 'Lokasi tidak ditemukan');
        }

        res.json({
            status: 'success',
            message: 'Lokasi berhasil dihapus'
        });
    } catch (error) {
        next(error);
    }
};
