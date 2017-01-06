var app = angular.module('myApp', ['ngResource']);

app.controller('WeatherCityCtrl', ['$scope', function ($scope) {
    $scope.weathers = [];
    console.log("cityweath " + this.weathers);
}]);

app.controller('PaginationCityCtrl', ['$scope', function ($scope) {
    // $scope.curreantPage = 0;
    $scope.pageSize = 10;
    // $scope.length = 0;

}]);