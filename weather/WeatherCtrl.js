app.component('weatherComp', {
    bindings: {
        weathers: '='
    },
    templateUrl: 'weather/weather.html',
    controller: 'WeatherCtrl'
});


app.controller('WeatherCtrl', ['$scope', function ($scope) {
}]);