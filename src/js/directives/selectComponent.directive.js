/******************************
 *
 * select component directive
 *
 ******************************/

app.directive('selectComponent', ['$window', '$rootScope', function ($window, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: '../views/templates/selectHotelCmp.html',
        transclude: true,
        scope: {
            dataList: '=?info',
            selectLabel: '@label',
            selectPlaceholder: '@placeholder'
        },
        link: function ($scope, $element, $attributes) {
            $scope.itemSelected = null;
            $scope.showDropDown = false;
            // $scope.signDropDown = true;
            var window = angular.element($window);

            // tell to all directive to close
            $rootScope.$on('closeDropDown', function () {
                close()
            });

            function close() {
                $scope.showDropDown = false;
            }

            function open() {
                $scope.showDropDown = true;
            }


            $scope.toggleMenu = function () {
                if($scope.showDropDown == true) {
                    close();
                    return;
                }
                $rootScope.$emit("closeDropDown"); // call to all directive to close drop down menu
                open();
                event.stopPropagation();
            };

            $scope.chooseItem = function (item) {
                $scope.itemSelected = item;
            };


            // close directive when click on window area
            window.bind('click', function(){
                close();
                $scope.$apply();
            });

        }
    }
}]);

