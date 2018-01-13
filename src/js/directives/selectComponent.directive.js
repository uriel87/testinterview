/******************************
 *
 * select component directive
 *
 ******************************/

app.directive('selectComponent', ['$window', '$rootScope','$document', function ($window, $rootScope, $document) {
    return {
        restrict: 'E',
        templateUrl: '../views/templates/selectHotelCmp.html',
        transclude: true,
        scope: {
            dataList: '=?info'
        },
        link: function ($scope, $element, $attributes) {
            $scope.itemSelected = null;
            $scope.showDropDown = false;
            $scope.signDropDown = true;
            var window = angular.element($window);

            $rootScope.$on('closeDropDown', function () {
                console.log(" $rootScope.$on close()")
                close()
            });

            function close() {
                $scope.showDropDown = false;
                $scope.signDropDown = true;
                $scope.$apply();
            }

            function open() {
                $scope.showDropDown = true;
                $scope.signDropDown = false;
            }


            $scope.toggleMenu = function (event) {
                if($scope.showDropDown == true) {
                    close()
                } else {
                    $rootScope.$emit("closeDropDown");
                    open();
                    event.stopPropagation();
                }
            };

            $scope.chooseItem = function (item) {
                $scope.itemSelected = item;
            };

            window.bind('click', function(){
                close();
            });

        }
    }
}]);

