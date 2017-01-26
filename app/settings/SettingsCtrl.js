'use strict';

angular.module('myApp').controller('SettingsCtrl', SettingsCtrl);

SettingsCtrl.$inject = ['$scope', 'NetworkService', 'AuthService'];

function SettingsCtrl($scope, NetworkService, AuthService) {

    $scope.dafaultCity = AuthService.getDefaultCity();

    $scope.addDefaultCity = function () {
        if ($scope.city == "") {
            return;
        }
        else {
            var promise = NetworkService.getCities('/city', $scope.city).promise;
            promise.then(function (response) {
                $scope.idCity = response.data.content[0].idCity;

                var data;
                var promise = NetworkService.addCityToUser(data, "/user/city/" + $scope.idCity).promise;
                promise.then(function (response) {
                    AuthService.clearDefaultCity();
                    AuthService.setDefaultCity($scope.city);
                });
            });
        }
    }
}