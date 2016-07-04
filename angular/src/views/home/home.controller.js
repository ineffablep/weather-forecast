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
        this.waiting=false;
        this.canSearch=true;
    }

    day(date) {
        this.toggle();

        this.hourlyWeather = this.weathers.list.filter(function (item) {
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
        this.forecastApi.getWeatherForecastByCity(this.search).then(function (result) {
            homeScope.weathers = result;
            homeScope.unitFlag = (homeScope.search.units === 'metric' ? '°C' : '°F');
            homeScope.weekFlag = true;
            homeScope.dayFlag = false;
            homeScope.waiting=false;
        }, function (error) {
            homeScope.notFoundError=true;
            homeScope.waiting=false;
        });
    }

}

HomeController.$inject = ['forecastApi'];
export  default HomeController;