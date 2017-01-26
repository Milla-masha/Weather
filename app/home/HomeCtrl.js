'use strict';

angular.module('myApp').controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', 'AuthService', '$state'];

function HomeCtrl($scope, AuthService, $state) {
    if (AuthService.getDefaultCity()) {
        $state.go('weatherCity', {city: AuthService.getDefaultCity()});
    }
}
