'use strict';

angular.module('myApp').controller('RegistrationCtrl', RegistrationCtrl);

RegistrationCtrl.$inject = ['$scope', 'NetworkService'];

function RegistrationCtrl($scope, NetworkService) {

    $scope.registration = function () {
        if ($scope.password != $scope.confirmPassword) {
            $scope.message = "Пароль не совпадает.";
            return;
        }
        else {
            $scope.master = {
                "login": $scope.login,
                "password": $scope.password
            };
            var promise = NetworkService.registration($scope.master, '/user').promise;
            promise.then(function (responce) {
                var data = responce.data;
                $scope.message = "Вы зарегистрированы.";
            });
        }
    }
}