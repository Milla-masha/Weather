
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
