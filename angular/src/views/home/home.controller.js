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
    }

    day(date) {
        this.toggle();

        this.weather = this.weathers.list.filter(function (item) {
            return item.dt === date;
        })[0];
    }

    toggle() {
        this.weekFlag = !this.weekFlag;
        this.dayFlag = !this.dayFlag;
    }

    showWeek() {
        return !this.notFoundError && this.weekFlag;
    }

    showDay() {
        return this.dayFlag;
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