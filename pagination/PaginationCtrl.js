app.component('paginationComp', {
    bindings: {
        length: '@'
    },
    templateUrl: 'pagination/pagination.html',
    controller: 'PaginationCtrl'

});

app.controller('PaginationCtrl', ['$scope', function ($scope) {

    $scope.numberOfPages = function () {
        if (!$ctrl.length) {
            return;
        }
        return Math.ceil($ctrl.length / $scope.pageSize);
    }
    $scope.currentPage = 0;
    $scope.pageSize = 10;
}]);