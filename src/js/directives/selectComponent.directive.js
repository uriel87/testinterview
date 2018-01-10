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

            $scope.itemSelected = null;
            $scope.showDropDown = false
            $scope.signDropDown = true
            var windowElement = $(document);

            $scope.openDropDown = function () {
                console.log("in openDropDown")
                $scope.signDropDown = !$scope.signDropDown
                $scope.showDropDown = !$scope.showDropDown
            }

            $scope.chooseItem = function (item) {
                console.log("in chooseItem: " + item)
                $scope.itemSelected = item
                // $scope.signDropDown = true
                // $scope.showDropDown = false
            }

            angular.element(windowElement).on('click', function () {
                console.log("in angular.element($window)")
                $scope.signDropDown = true;
                $scope.showDropDown = false;
                console.log("$scope.signDropDown: " + $scope.showDropDown)
                console.log("$scope.signDropDown: " + $scope.signDropDown)
            })

        }
    }
}]);

