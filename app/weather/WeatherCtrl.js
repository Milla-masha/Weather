'use strict';

angular.module('myApp').controller('WeatherCtrl', WeatherCtrl);

WeatherCtrl.$inject = ['$scope', '$stateParams', 'NetworkService'];

function WeatherCtrl($scope, $stateParams, NetworkService) {

    $scope.city=$stateParams.city;
    var promise = NetworkService.getWeather('/weather', $scope.city).promise;
    promise.then(function (response) {console.log(response);
        $scope.weathers = response.data.content;
    });
}