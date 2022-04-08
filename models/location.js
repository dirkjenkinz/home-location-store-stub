const mongoose = require('mongoose');
const GeoLocation = require('./geoLocation').schema;

const locationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true
    },
    location: GeoLocation
});

module.exports = mongoose.model('Location', locationSchema);