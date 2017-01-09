(function () {
    app.filter('timeToDate', function () {
        return function (input) {
            var newDate = new Date(input);
            return newDate.getDay() + 1 + "/" + newDate.getMonth() + 1 + "/" + newDate.getFullYear();
        }
    });
    app.filter('timeToHours', function () {
        return function (input) {
            var newDate = new Date(input);
            return newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        }
    });

    app.filter('startFrom', function () {
        return function (input, start) {
            if (!input || !input.length) {
                return;
            }
            start = +start; //parse to int
            return input.slice(start);
        }
    });
})();