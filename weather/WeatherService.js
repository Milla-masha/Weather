app.service('WeatherService', ['$resource',
    function ($resource) {
        return $resource('http://api.openweathermap.org/data/2.5/forecast', {});
    }
])