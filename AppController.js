'use strict';

var app = angular.module('myApp', ['ngResource', 'ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html'
        })
        .state('red', {
            url: '/red',
            templateUrl: 'red.html'
        })
        .state('weatherCity', {
            url: '/weather/:city',
            templateUrl: 'weather/weather.html',
            controller: 'WeatherCtrl'
        })
});

app.controller('WeatherCityCtrl', ['$scope', function ($scope) {
    $scope.length = 0;
    // $scope.weathers = [];
    // console.log("cityweath " + this.weathers);
}]);
