'use strict';

angular.module('myApp').controller('LogoutCtrl', LogoutCtrl);

LogoutCtrl.$inject = ['$scope', 'AuthService'];

function LogoutCtrl($scope, AuthService) {
    AuthService.clearRefreshToken();
    AuthService.clearAccessToken();
    AuthService.clearExpiresIn();
    AuthService.clearId();
    AuthService.clearDefaultCity();
    $scope.$emit('logout', {auth:false });
}
