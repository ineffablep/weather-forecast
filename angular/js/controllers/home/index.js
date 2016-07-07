import '../../../assets/styles/home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import autoCity from '../../directives/autocity';
import forecastApi from '../../services/forecastApi';

export default angular.module('app.home', [uirouter,forecastApi,autoCity])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
