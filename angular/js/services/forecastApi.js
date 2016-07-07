import angular from 'angular';

let moduleName = 'services.forecastApi';
class ForecastApiService {
    constructor($http, $q) {
        this.http = $http;
        this.q = $q;
        this.apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?appid=f50e754f4d2539332f4f0529502c6b37&mode=json';
    }

    getWeatherForecastByCity(search) {
        let apiUrl = this.apiUrl;
        if (search && search.city) {
            apiUrl += '&q=' + search.city + '&units=' + search.units;
            return this.getData(apiUrl);
        }
        return [];
    }

    getWeatherForecastByCoordinates(search) {
        let apiUrl = this.apiUrl;
        if (search && search.lat && search.lng) {
            apiUrl += '&lat=' + search.lat + '&lon=' + search.lng + '&units=' + search.units;
            return this.getData(apiUrl);
        }
        return [];
    }

    getData(apiUrl) {
        let deferred = this.q.defer();
        var scope = this;
        return this.http.get(apiUrl)
            .then(function(response) {
                let city = response.data.city.name + ' , ' + response.data.city.country,
                    res = scope.getFormattedForecast(city, response.data.list);
                deferred.resolve(res);
                return deferred.promise;
            }, function(response) {
                deferred.reject(response);
                return deferred.promise;
            });
    }

    getFormattedForecast(city, list) {
        let data = [],
            weekData = [],
            curdate = new Date((new Date()).getTime() - 180 * 60 * 1000),
            weekDays = [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'],
        perception = 0;

        list.forEach(function(item) {
            let dt = new Date(item.dt * 1000),
                date = dt.toLocaleDateString(),
                time = dt.toLocaleTimeString(),
                day = weekDays[dt.getDay()];

            if (curdate <= dt) {
                if (!item.wind) {
                    item.wind = {'speed': 0, 'deg': 0};
                }
                if (curdate.toLocaleDateString() === dt.toLocaleDateString()) {
                    item.day = 'Today';
                }
                let temp = Math.round(10 * (item.main.temp)) / 10,
                    tmin = Math.round(10 * (item.main.temp_min)) / 10,
                    tmax = Math.round(10 * (item.main.temp_max)) / 10,
                    text = item.weather[0].description,
                    gust = item.wind.speed,
                    pressure = item.main.pressure,
                    cloud = item.clouds.all,
                    icon = item.weather[0].icon;
                if (item.rain && item.rain['3h']) {
                    perception = Math.round(item.rain['3h'] * 10) / 10;
                }
                if (item.snow && item.snow['3h']) {
                    perception += Math.round(item.snow['3h'] * 10) / 10;
                }

                var dataItem = {
                    dt: dt,
                    date: date,
                    day: day,
                    time: time,
                    temp: temp,
                    tmin: tmin,
                    tmax: tmax,
                    text: text,
                    gust: gust,
                    pressure: pressure,
                    cloud: cloud,
                    icon: icon,
                    perception: perception
                };

                data.push(dataItem);
                if (!weekData.contains(dataItem)) {
                    weekData.push(dataItem);
                }
            }
        }, this);

        return {'city': city, 'list': data, 'daily': weekData};
    }

}
Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].date === v.date) {
            return true;
        }
    }
    return false;
};


ForecastApiService.$inject = ['$http', '$q'];

angular.module(moduleName, [])
    .service('forecastApi', ForecastApiService);


export default moduleName;
