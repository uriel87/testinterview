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

            // tell to all directive to close
            $rootScope.$on('closeDropDown', function () {
                close()
            });

            function close() {
                $scope.showDropDown = false;
                $scope.signDropDown = true;
            }

            function open() {
                $scope.showDropDown = true;
                $scope.signDropDown = false;
            }


            $scope.toggleMenu = function () {
                if($scope.showDropDown == true) {
                    close()
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

