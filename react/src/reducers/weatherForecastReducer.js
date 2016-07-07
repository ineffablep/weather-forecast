import {RECEIVE_WEATHER_FORECAST, REQUEST_WEATHER_FORECAST, SET_SELECTED_CITY,SET_SELECTED_UNITS,SHOW_HOURLY,SHOW_WEEKLY,TOGGLE_LOADING} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import uuid from 'uuid';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function weatherForecastReducer(state = initialState, action) {
    let newState;

    switch (action.type) {

        case RECEIVE_WEATHER_FORECAST:
        {
            let city = action.results.city.name + ' , ' + action.results.city.country,
                res = getFormattedForecast(city, action.results.list);

            newState = objectAssign({}, state, res);
            newState.loading=false;
            return newState;
        }

        case REQUEST_WEATHER_FORECAST:
            newState = objectAssign({}, state);
            return newState;
        case  SET_SELECTED_CITY:
            newState = objectAssign({}, state,{
                id:getUid(),
                search:objectAssign({}, state.search,{
                    id:getUid(),
                    city:action.city
                })
            });
            return newState;
        case  SET_SELECTED_UNITS:
            newState = objectAssign({}, state,{
                id:getUid(),
                search:objectAssign({}, state.search,{
                    id:getUid(),
                    units:action.units
                })
            });
            return newState;
        case SHOW_WEEKLY:
            newState = objectAssign({}, state,{
                showHourly:false,
                showWeekly:true,
                id:getUid()
            });
            return newState;
        case SHOW_HOURLY:
            newState = objectAssign({}, state,{
                id:getUid()
            });
            newState.showHourly=true;
            newState.showWeekly=false;
            newState.date=action.date;
            return newState;

        case TOGGLE_LOADING:
            newState = objectAssign({}, state,{
                id:getUid(),
            });
            newState.loading=true;
        default:
            return state;
    }
}

let assignedUids=[];

function getUid() {
    let id= uuid.v4();
    if(assignedUids.contains(id))
    {
        getUid();
    }
    else {
        assignedUids.push(id);
        return id;
    }
}
function getFormattedForecast(city, list) {
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

            let dataItem = {
                id:getUid(),
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
            if (!weekData.dateContains(dataItem)) {
                dataItem.id=getUid();
                weekData.push(dataItem);
            }
        }
    }, this);

    return {city: city, list: data, daily: weekData, id:getUid()};
}

Array.prototype.dateContains = function(v) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].date === v.date) {
            return true;
        }
    }
    return false;
};

Array.prototype.contains = function(v) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === v) {
            return true;
        }
    }
    return false;
};
