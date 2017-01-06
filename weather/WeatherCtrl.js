app.factory('Weather', ['$resource',
    function ($resource) {
        return $resource('http://api.openweathermap.org/data/2.5/forecast', {
            // name: 'name'
        });
    }
])

app.controller('WeatherCtrl', ['$scope', 'Weather', function ($scope, Weather) {
    $scope.queryCallByName = function (city) {
        $scope.callName = "queryCall";
        $scope.weathers = Weather.get({q: city, appid: "afb812a7d97fa7bbbf0f793de48b8832", cnt: "10"});
    };
}]);