app.controller('CityCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('resource/city.json').then(function (data) {
        $scope.cities = data;
    }, function () {
    });
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.city = "Minsk";

    $scope.numberOfPages = function () {
        return Math.ceil($scope.cities.data.length / $scope.pageSize);
    }

}]);