
const Location = require("../schemas/location-schema")

//GET current location
const getCurrentLocation = async (req, res, next ) => {

const locationId = req.params.lid;

let currentLocation; 

try {
    currentLocation = await Location.findById(locationId);
    res.status(200).json(currentLocation);
} catch (err) {
    res.status(404).json({message: err.message})
}


}

//ADD location
const addNewLocation = async (req, res, next ) => {

  const  {date, address, time} = req.body;

  if (!date) {
    return res.status(300).json({message: "Incldue date"})
  }
  if (!address) {
    return res.status(300).json({message: "Incldue address"})
  }
  if (!time) {
    return res.status(300).json({message: "Incldue time"})
  }


  let location; 

  location = new Location({
    date,
    address,
    time

  })

try {
    await location.save();
    res.status(200).json({location})
} catch (err) {
    res.status(303).json({message: err.message})
    console.log(err.message)
}


}

//UPDATE current location
const updateCurrentLocation = async (req, res, next ) => {

const {date, address, time} = req.body;
const locationId = "64b34f31dfce5ca2013388bf";
let currentLocation;

try {
    currentLocation = await Location.findById(locationId)
} catch (err) {
    res.status(400).json({message: "couldn't find location"})
}

let updatedLocation = {}

if (date) {
    updatedLocation.date = date;
}

if (address) {
    updatedLocation.address = address;
}


if (time) {
    updatedLocation.time = time;
}

currentLocation.set(updatedLocation);

try {
    currentLocation.save().catch((error) => console.error(error));
    res.status(200).json(currentLocation);
} catch (err) {
    res.status(400).json({message: err.message})
}


}

exports.getCurrentLocation = getCurrentLocation;
exports.addNewLocation = addNewLocation;
exports.updateCurrentLocation = updateCurrentLocation;