'use strict';

/**
 * @ngdoc overview
 * @name mmTrainApp
 * @description
 * # mmTrainApp
 *
 * Main module of the application.
 */
angular
  .module('mmTrainApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '../views/main.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: '../views/about.html'
        });
  });
