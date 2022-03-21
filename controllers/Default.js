'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.locationsGET = function locationsGET (req, res, next) {
  Default.locationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsHomeLocationDELETE = function locationsHomeLocationDELETE (req, res, next, homeLocation) {
  Default.locationsHomeLocationDELETE(homeLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsHomeLocationGET = function locationsHomeLocationGET (req, res, next, homeLocation) {
  Default.locationsHomeLocationGET(homeLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsPOST = function locationsPOST (req, res, next, body) {
  Default.locationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsPUT = function locationsPUT (req, res, next, body) {
  Default.locationsPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
