'use strict';
const utils = require('../utils/writer.js');
const Location = require('../models/location');
const { logger } = require('../utils/logger.js');

/**
 * Returns all home locations from the home location store
 *
 * returns List
 **/
exports.locationsGET = () => {
  logger.info('locationsGET');
  return new Promise(async (resolve, reject) => {
    try {
      const locations = await Location.find();
      resolve(locations);
    } catch (err) {
      logger.error(err);
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
  logger.info('locationsHomeLocationDELETE');
  return new Promise(async (resolve, reject) => {
    try {
      const location = await Location.find({ homeLocation: homeLocation })
      if (location.length === 0){
        resolve(new utils.respondWithCode(404,));
      };
      await Location.deleteOne({ homeLocation: homeLocation });
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      logger.error(err)
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
  logger.info('locationsHomeLocationGET');
  return new Promise(async (resolve, reject) => {
    try {
      const location = await Location.find({ homeLocation: homeLocation });
      if (location.length === 0){
        resolve(new utils.respondWithCode(404,));
      }
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      logger.error(err)
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
  logger.info('locationsPOST');
  return new Promise(async (resolve, reject) => {
    const location = new Location({
      "locationName": body.locationName,
      "location": {
        "latitude": body.location.latitude,
        "longitude": body.location.longitude,
      }
    });
    try {
      await location.save(); 
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      logger.error(err);
      reject(new utils.respondWithCode(500,));
    }
  });
};

exports.locationsPUT = (body) => {
  logger.info('locationsPUT');
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await Location.findOneAndUpdate(
        { locationName: body.locationName },
        { $set: { location: body.location } },
        { new: true }
      );
      logger.info('updated record='+resp)
      resolve(new utils.respondWithCode(200,));
    } catch (err) {
      logger.error('error='+err);
      reject(new utils.respondWithCode(500,));
    }
  });
};