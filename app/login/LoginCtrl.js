'use strict';

angular.module('myApp').controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', 'NetworkService', 'AuthService', '$state'];

function LoginCtrl($scope, NetworkService, AuthService, $state) {
    if (AuthService.getAccessToken) {
        $scope.message = "Вы авторизованы";
    }
    else {
        $scope.message = "Вы не авторизованы";
    }
    $scope.signIn = function () {
        AuthService.clearRefreshToken();
        AuthService.clearAccessToken();
        AuthService.clearExpiresIn();
        AuthService.clearId();
        AuthService.clearDefaultCity();
        var data = "client_id=my-client-id&" + "client_secret=my-client-secret&" + "grant_type=password&" + "password=" + $scope.password + "&username=" + $scope.login;
        var promise = NetworkService.authorisation(data, "/oauth/token").promise;
        promise.then(function (response) {
            var data = response.data;
            $scope.$emit('login', {auth: true});
            AuthService.setRefreshToken(data.refresh_token);
            AuthService.setAccessToken(data.access_token);
            AuthService.setExpiresIn(data.expires_in);
            var promise = NetworkService.getUserInfo('/user').promise;
            promise.then(function (response) {
                if(response.data.cityDefault!=null)
                AuthService.setDefaultCity(response.data.cityDefault);
                $state.go('home');
            });
        });
    }
}