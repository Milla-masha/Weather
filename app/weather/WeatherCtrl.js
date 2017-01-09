
    app.controller('WeatherCtrl', ['$scope', '$stateParams', 'WeatherService', function ($scope, $stateParams, WeatherService) {
        $scope.weathers = WeatherService.get({
            q: $stateParams.city,
            appid: "afb812a7d97fa7bbbf0f793de48b8832",
            cnt: "10"
        })
    }]);
