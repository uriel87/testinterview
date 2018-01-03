


/******************************
 *
 * select component directive
 *
 ******************************/

app.directive('selectComponent',['$window','hostingHousesService', function ($window, hostingHousesService) {
    return {
        restrict: 'E',
        templateUrl: '../views/templates/selectHotelCmp.html',
        transclude: true,
        scope: {
            dataList: '=?info'
        },
        link: function($scope, $element, $attributes) {

            $scope.itemSelected = function (item) {
                $scope.item = item;
            }

            var listItem = $element[0].getElementsByClassName("title-menu");

            // angular.element(listItem).bind('click', function(event){
            //     console.log("hhhhhhhhhhhhhhhhhhhhh")
            //     // this.siblings()[0].child(".list-item").css('display', 'block');
            //     angular.element(listItem).next().css('display', 'block');
            //     // angular.element(listItem).next().css('display', 'block');
            //
            // });

            // angular.element($window).bind('onload', function(event){
            // //     var queryResult = $element[0].querySelector('.list-item');
            // //     if(angular.element(queryResult).css('display') == 'none')
            // //     {
            // //         angular.element(queryResult).css('display', 'block');
            // //     } else {
            // //         angular.element(queryResult).css('display', 'none');
            // //     }
            // });

            angular.element($window).bind('click', function(event){
                var queryResult = $element[0].querySelector('.list-item');
                if(angular.element(queryResult).css('display') == 'block') {
                    angular.element(queryResult).css('display', 'none');
                }
            });


        }
    }
}]);