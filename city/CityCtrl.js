app.component('cityComp', {
    bindings: {
        weathers: '='
    },
    templateUrl: 'city/city.html',
    controller: 'CityCtrl'

});

app.controller('CityCtrl', ['$scope', '$http', 'Weather', function ($scope, $http, Weather) {
    var ctrl = this;
    $scope.queryCallByName = function (city) {
        $scope.callName = "queryCall";
        ctrl.weathers = Weather.get({q: city, appid: "afb812a7d97fa7bbbf0f793de48b8832", cnt: "10"})
    };

    $http.get('resource/city.json').then(function (data) {
        $scope.cities = data;
    }, function () {
    });

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.city = "Minsk";

    $scope.numberOfPages = function () {
        if (!$scope.cities || !$scope.cities.data.length) {
            return;
        }
        return Math.ceil($scope.cities.data.length / $scope.pageSize);
    }

}]);