'use strict';

var app = angular.module('myApp', ['ngResource', 'ui.router', 'LocalStorageModule','chart.js']);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('weather')
        // .setStorageType('sessionStorage')
        .setNotify(true, true)
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        })
        .state('red', {
            url: '/red',
            templateUrl: 'red.html'
        })
        .state('weatherCity', {
            url: '/weather/:city',
            templateUrl: 'app/weather/weather.html',
            controller: 'WeatherCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
        })
        .state('logout', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'LogoutCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/settings/settings.html',
            controller: 'SettingsCtrl'
        })
        .state('registration', {
            url: '/registration',
            templateUrl: 'app/registration/registration.html',
            controller: 'RegistrationCtrl'
        });
    $urlRouterProvider.otherwise("/home");
});

app.controller('WeatherCityCtrl', ['$scope', 'AuthService', function ($scope, AuthService, Constant) {

    $scope.isAuthorized = false;
    $scope.length = 0;

    $scope.$on('login', function (event, args) {
        $scope.isAuthorized = args.auth;
    });

    $scope.$on('logout', function (event, args) {
        $scope.isAuthorized = args.auth;
    });


    if (AuthService.getAccessToken()) {
        $scope.isAuthorized = true;
    }
    else {
        $scope.isAuthorized = false;
    }

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };
}]);

