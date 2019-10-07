# WeatherApplicationNodeJS
https://level9-weather-application.herokuapp.com/

This project is created with the help of expressJS, NodeJs and some really great npm libraries.
You can use it to check weather of any city, country.

I will describe ,how the application works.
First we provide the address to the Mapbox API which will return us the JSON with latitute, longitude and location for the same.
Since, we have got the latitude as well as longitude we can now use the DarkSky API by providing the latitude as well as longitude to get information regarding 
weather which we can manipulate in a JSON format , so it can be made to use by any frontend javascript file.


![WET](https://user-images.githubusercontent.com/20107730/66322637-1326cf00-e940-11e9-87f5-479aaa984db3.PNG)

*Handlebars have been used as template engine

Some important npm libraries:-

```bash
"dependencies": {
    "express": "^4.16.4",
    "hbs": "^4.0.1",
    "request": "^2.88.0"
  },
  "devDependencies": {
    "nodemon": "^1.2.0"
  }
```


For installing &amp; starting the Project
```bash
npm install
npm run dev
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
