'use strict';


/**
 * Returns all home locations from the home location store
 *
 * returns List
 **/
exports.locationsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "locationName" : "locationName",
  "location" : {
    "latitude" : 0.8008282,
    "longitude" : 6.0274563
  }
}, {
  "locationName" : "locationName",
  "location" : {
    "latitude" : 0.8008282,
    "longitude" : 6.0274563
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deletes a single location
 *
 * homeLocation Long name of home location to delete
 * no response value expected for this operation
 **/
exports.locationsHomeLocationDELETE = function(homeLocation) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * returns a single home location record
 *
 * homeLocation String Name of location to search against
 * returns Location
 **/
exports.locationsHomeLocationGET = function(homeLocation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "locationName" : "locationName",
  "location" : {
    "latitude" : 0.8008282,
    "longitude" : 6.0274563
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a new home location to the location store, returns the location record
 *
 * body Location Home location object that needs to be added to the store (optional)
 * returns Location
 **/
exports.locationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "locationName" : "locationName",
  "location" : {
    "latitude" : 0.8008282,
    "longitude" : 6.0274563
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing location record
 *
 * body Location Complete home location object (optional)
 * returns Location
 **/
exports.locationsPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "locationName" : "locationName",
  "location" : {
    "latitude" : 0.8008282,
    "longitude" : 6.0274563
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

