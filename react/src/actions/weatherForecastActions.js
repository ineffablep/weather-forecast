import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function requestWeatherForecast(search) {
    return {
        type: types.REQUEST_WEATHER_FORECAST,
        search
    };
}

export function receiveWeatherForecast(search, res) {
    return {
        type: types.RECEIVE_WEATHER_FORECAST,
        search,
        results: res
    };
}

export function fetchWeatherForecast(search) {

    return dispatch => {
        dispatch(requestWeatherForecast(search));
        let apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?appid=f50e754f4d2539332f4f0529502c6b37&mode=json';
        apiUrl += '&q=' + search.city + '&units=' + search.units;
        return fetch(apiUrl).then(response => response.json())
            .then(json =>dispatch(receiveWeatherForecast(search, json)));
    };
}

export function setSelectedCity(city, coordinates) {
    return {
        type: types.SET_SELECTED_CITY,
        city,
        coordinates
    };
}

export function setSelectedUnits(units) {
    return {
        type: types.SET_SELECTED_UNITS,
        units
    };
}

export function showHourly(date) {
    return {
        type: types.SHOW_HOURLY,
        date
    };
}

export function showWeekly() {
    return {
        type: types.SHOW_WEEKLY
    };
}

export function toggleLoading() {
    return {
        type: types.TOGGLE_LOADING
    };
}
