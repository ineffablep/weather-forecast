***Angularjs ES6 Weather Forecast App***

Five Days Weather forecast by using http://api.openweathermap.org/

Application developed with AngularJs 1, ES6 , Babel , Webpack modules

**Setup**

 install the application git clone https://github.com/ineffablep/weather-forecast.git 

 Go to angular directory
 
 Open terminal or command prompt and run npm install to install all dependencies
 
 To run the application in development mode  run below command in terminal or command prompt
 
 npm start  and open http://localhost:8080  in browser to view the output
 
 
** To build the application **
 
 npm run build
 
** To run the Test cases**
 
 npm run test
 
 **Windows** 
 Please install karma cli npm install -g karma-cli
 
 **To run eslint **
 
 npm run lint
 
 ***Structure***
 
 **app.js**
 
 Entry point for the angular applicaiton
 
 **views/home/index.js**
 
 Exports Home Controller and inject require dependecies 
 ES6 Import feature to import require dependencies
 
 
 **views/home/home.controller.js**
 
 ES6 Class based approach for Angular JS 1 Controller
 
 constructor receives injected forecastAPI Dependencies and initialise variables
 
 _getForeCast_ Retries forecast from ForecastAPI  and update results to weathers
 
 _day_ toggles to display hourly forecast
 
 _toggle_ helper to toggle daily forecast or hourly forecast
 
 
 **Directives**
 
 Autocity directive get Cities from Google Map API
 
 
 **Services**
 
 ForecastAPi connects to openweathermap and get weather data
 
 _getWeatherForecastByCity_ will get the forecast data based on give City 
 
 _getWeatherForecastByCoordinates_ will get the forecast data based on longitude and latitude coordinates
 
 _getFormattedForecast_ formats openweathermap results to 5day forecast and hourly forecast
 
 
        
 
