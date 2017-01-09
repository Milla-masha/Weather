(function () {
    app.component('cityComp', {
        templateUrl: 'city/city.html',
        controller: 'CityCtrl'

    });

    app.controller('CityCtrl', ['$scope', 'CityService', function ($scope, CityService) {
        var ctrl = this;

        CityService.async().then(function (d) {
            $scope.cities = d;
        });
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.city = "Minsk";

        $scope.numberOfPages = function () {
            if (!$scope.cities || !$scope.cities.length) {
                return;
            }
            return Math.ceil($scope.cities.length / $scope.pageSize);
        }

    }]);
})();
(function () {
    app.factory('CityService', function ($http) {
        var myService = {
            async: function () {
                // $http returns a promise, which has a then function, which also returns a promise
                var promise = $http.get('resource/city.json').then(function (response) {
                    // The then function here is an opportunity to modify the response
                    console.log(response);
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
            }
        };
        return myService;
    });
})();
(function () {
    app.filter('timeToDate', function () {
        return function (input) {
            var newDate = new Date(input);
            return newDate.getDay() + 1 + "/" + newDate.getMonth() + 1 + "/" + newDate.getFullYear();
        }
    });
    app.filter('timeToHours', function () {
        return function (input) {
            var newDate = new Date(input);
            return newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        }
    });

    app.filter('startFrom', function () {
        return function (input, start) {
            if (!input || !input.length) {
                return;
            }
            start = +start; //parse to int
            return input.slice(start);
        }
    });
})();
(function () {
    app.controller('WeatherCtrl', ['$scope', '$stateParams', 'WeatherService', function ($scope, $stateParams, WeatherService) {
        $scope.weathers = WeatherService.get({
            q: $stateParams.city,
            appid: "afb812a7d97fa7bbbf0f793de48b8832",
            cnt: "10"
        })
    }]);
})();
(function () {
    app.service('WeatherService', ['$resource',
        function ($resource) {
            return $resource('http://api.openweathermap.org/data/2.5/forecast', {});
        }
    ])
})();

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