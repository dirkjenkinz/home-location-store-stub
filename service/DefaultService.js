'use strict';
const Location = require('../models/location');

/**
 * Returns all home locations from the home location store
 *
 * returns List
 **/
exports.locationsGET = () => {
  console.log(locationsGET);
  return new Promise(async (resolve, reject) => {
    try {
      const locations = await Location.find();
      resolve(locations);
    } catch (err) {
      console.log(err);
      reject(new utils.respondWithCode(500,));
    }
  });
};


/**
 * deletes a single location
 *
 * homeLocation Long name of home location to delete
 * no response value expected for this operation
 **/
exports.locationsHomeLocationDELETE =  (homeLocation) => {
  console.log('locationsHomeLocationDELETE')
  return new Promise(async (resolve, reject) => {
    try {
      const location = await Location.find({ homeLocation: homeLocation })
      console.log('location=', location);
      if (location.length === 0){
        resolve(new utils.respondWithCode(404,));
      };
      await Location.deleteOne({ homeLocation: homeLocation });
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      console.log(err)
      reject(new utils.respondWithCode(500,));
    }
  });
}


/**
 * returns a single home location record
 *
 * homeLocation String Name of location to search against
 * returns Location
 **/
exports.locationsHomeLocationGET = function(homeLocation) {
  console.log('locationsHomeLocationGET');
  return new Promise(async (resolve, reject) => {
    try {
      const location = await Location.find({ homeLocation: homeLocation });
      if (location.length === 0){
        resolve(new utils.respondWithCode(404,));
      }
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      console.log(err)
      reject(new utils.respondWithCode(500,));
    }
  });
};


/**
 * Adds a new home location to the location store, returns the location record
 *
 * body Location Home location object that needs to be added to the store (optional)
 * returns Location
 **/
exports.locationsPOST = function(body) {
  console.log('locationsPOST')
  return new Promise(async (resolve, reject) => {
    const location = new Location({
      "locationName": body.locationName,
      "location": {
        "latitude": body.location.latitude,
        "longitude": body.location.longitude,
      }
    })
    try {
      await location.save();
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      console.log(err);
      reject(new utils.respondWithCode(500,));
    }
  });
};


/**
 * Update an existing location record
 *
 * body Location Complete home location object (optional)
 * returns Location
 **/
exports.locationsPUT = function(body) {
  console.log('locationspUT')
  return new Promise(async (resolve, reject) => {
    const upDatedRecord = new Location({
      "locationName": body.locationName,
      "location": {
        "latitude": body.location.latitude,
        "longitude": body.location.longitude,
      },
      "home": body.home
    })
    try {
      var location = await Location.find({ locationName: body.locationName });
      if (location.length === 0){
        resolve(new utils.respondWithCode(404,));
      };
      await upDatedRecord.save();
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      console.log(err);
      reject(new utils.respondWithCode(500,));
    }
  });
};
