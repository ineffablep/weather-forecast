import { combineReducers } from 'redux';
import weatherForecast from './weatherForecastReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  weatherForecast,
  routing: routerReducer
});

export default rootReducer;
