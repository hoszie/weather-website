const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f8ac7b70a486233d01069b542fbe27c0&query=${lat},${long}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `It is currently ${body.current.temperature}. It feels like ${body.current.feelslike}. There will be ${body.current.wind_speed}km winds from the ${body.current.wind_dir}`)
    }
  })
}

module.exports = forecast 

