const mongoose = require('mongoose');
const GeoLocation = require('./geoLocation');

const locationSchema = new mongoose.Schema({
    LocationName: {
        type: String,
        required: true
    },
    location: GeoLocation
});

module.exports = mongoose.model('Location', locationSchema);