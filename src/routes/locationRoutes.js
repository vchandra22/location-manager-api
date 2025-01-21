const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { validateLocation } = require('../middleware/validators');

router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getLocationById);
router.post('/', validateLocation, locationController.createLocation);
router.put('/:id', validateLocation, locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;