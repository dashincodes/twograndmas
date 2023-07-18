const express = require('express');

const router = express.Router();

const locationControllers = require("../controllers/location-controllers")

//GET location
router.get("/:lid", locationControllers.getCurrentLocation)

//ADD a new location
router.post("/", locationControllers.addNewLocation);

//UPDATE a location
router.patch("/", locationControllers.updateCurrentLocation);

module.exports = router;