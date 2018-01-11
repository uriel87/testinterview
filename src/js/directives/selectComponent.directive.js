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
            var everywhere = angular.element($window);

            $scope.toggleMenu = function (event) {
                $scope.signDropDown = !$scope.signDropDown;
                $scope.showDropDown = !$scope.showDropDown;
                event.stopPropagation();
            }

            $scope.chooseItem = function (item) {
                $scope.itemSelected = item
                $scope.signDropDown = true
                $scope.showDropDown = false
            }

            everywhere.on('click', function(){
                if($scope.showDropDown){
                    $scope.showDropDown = false;
                    $scope.signDropDown = true;
                }
                // console.log("$scope.signDropDown: " + $scope.showDropDown)
                // console.log("$scope.signDropDown: " + $scope.signDropDown)
                $scope.$apply();
            });

        }
    }
}]);

