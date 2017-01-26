app.component('cityComp', {
    templateUrl: 'app/city/city.html',
    controller: 'CityCtrl'

});

app.controller('CityCtrl', ['$scope', 'CityService', 'AuthService', function ($scope, CityService, AuthService) {
    var ctrl = this;

    CityService.async().then(function (d) {
        $scope.cities = d;
    });
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.city = AuthService.getDefaultCity() || "Minsk";

    $scope.numberOfPages = function () {
        if (!$scope.cities || !$scope.cities.length) {
            return;
        }
        return Math.ceil($scope.cities.length / $scope.pageSize);
    }

}]);
