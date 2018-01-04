/******************************
 *
 * select component directive
 *
 ******************************/

app.directive('selectComponent', ['$window', 'hostingHousesService', function ($window, hostingHousesService) {
    return {
        restrict: 'E',
        templateUrl: '../views/templates/selectHotelCmp.html',
        transclude: true,
        scope: {
            dataList: '=?info'
        },
        link: function ($scope, $element, $attributes) {

            $scope.itemSelect = null;

        }
    }
}]);

