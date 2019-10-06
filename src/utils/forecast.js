const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/f70177a3a416cfff011240fd357ef348/${lat},${long}`

   

    request({url, json:true}, (error, { body }) => { 
       if(error){
           callback('Unable to make request!', undefined)
       }else if(body.error){
        callback('Unable to Find Location!', undefined)
       }else{
           callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature}. There is a ${body.currently.precipProbability}% chance of rain. Maximum temperature will be  ${body.daily.data[0].temperatureMax}`)
       }
    })

}

module.exports = forecast