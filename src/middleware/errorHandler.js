const ApiError = require('../utils/apiError');

module.exports = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            errors: err.errors
        });
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'error',
            message: 'Data tidak valid',
            errors: Object.values(err.errors).map(error => ({
                field: error.path,
                message: error.message
            }))
        });
    }

    // MongoDB duplicate key error
    if (err.code === 11000) {
        return res.status(400).json({
            status: 'error',
            message: 'Data duplikat',
            errors: [{
                field: Object.keys(err.keyPattern)[0],
                message: 'Nilai sudah digunakan'
            }]
        });
    }

    console.error(err);
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
};