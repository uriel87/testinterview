

app.directive('bootselectpicker',['$window','hostingHousesService','$timeout', function ($window, hostingHousesService, $timeout) {
    return {
        restrict: "A",
        link: function(scope, element, attrs, ctrl) {
            $timeout(function() {
                $('.selectpicker').selectpicker({
                    size: 3,
                    width: "300px",
                });

            });

        }
    }
}]);