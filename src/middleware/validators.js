const { body } = require('express-validator');

exports.validateLocation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Nama lokasi harus diisi')
        .isLength({ min: 3 })
        .withMessage('Nama lokasi minimal 3 karakter'),

    body('address')
        .trim()
        .notEmpty()
        .withMessage('Alamat harus diisi')
        .isLength({ min: 5 })
        .withMessage('Alamat minimal 5 karakter'),

    body('lat')
        .isFloat({ min: -90, max: 90 })
        .withMessage('Latitude harus berupa angka antara -90 dan 90'),

    body('lng')
        .isFloat({ min: -180, max: 180 })
        .withMessage('Longitude harus berupa angka antara -180 dan 180')
];
