class HomeController {
    constructor(forecastApi) {
        this.notFoundError = false;
        this.search = {
            city: '',
            lat: '',
            lng: '',
            id: '',
            units: 'metric'
        };
        this.forecastApi = forecastApi;
        this.weekFlag = false;
        this.dayFlag = false;
        this.weathers={};
        this.unitFlag='metric';
        this.waiting=true;
        this.canSearch=true;
        this.getForeCastByUserLocation();
    }

    getForeCastByUserLocation() {
        let scope= this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                scope.search.lat=position.coords.latitude;
                scope.search.lng=position.coords.longitude;
                scope.getForeCast();
            });
        } else {
            this.waiting=false;

        }
    }

    day(date) {
        this.toggle();

        this.hourlyWeather = this.weathers.list.filter(function(item) {
            return item.date === date;
        });
    }

    toggle() {
        this.weekFlag = !this.weekFlag;
        this.dayFlag = !this.dayFlag;
        this.canSearch = !this.canSearch;

    }

    showWeek() {
        return !this.notFoundError && this.weekFlag;
    }

    showDay() {
        return this.dayFlag;
    }
    showSearch() {
        return this.canSearch;
    }

    getForeCast() {
        let homeScope= this;
        this.waiting=true;
        this.forecastApi.getWeatherForecastByCoordinates(this.search).then(function(result) {
            homeScope.search.city=result.city;
            homeScope.weathers = result;
            homeScope.unitFlag = (homeScope.search.units === 'metric' ? '°C' : '°F');
            homeScope.weekFlag = true;
            homeScope.dayFlag = false;
            homeScope.waiting=false;
        }, function(error) {
            homeScope.notFoundError=true;
            homeScope.waiting=false;
        });
    }

}

HomeController.$inject = ['forecastApi'];
export default HomeController;
