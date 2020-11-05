const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaG9zemllIiwiYSI6ImNrZTVhbDlubDBva3MycnBlbnl3eTh1ZjAifQ.-osPridhZZAAX1RFMwaMfA&limit=1`;
  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services');
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search');
    } else {
      callback(undefined, {
        location: body.features[0].place_name,
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        someshit: body.features[0].geometry.type
      })
    }
  })
}

module.exports = geocode;