

app.controller('orderCtl', ['$scope','hostingHousesService', function ($scope, hostingHousesService) {

    hostingHousesService.getHotels().then(function(data){
        $scope.hotels = data
        // console.log("$scope.getHotels: " + JSON.stringify($scope.hotels));
    });

    hostingHousesService.getHostels().then(function(data){
        $scope.hostels = data
        // console.log("$scope.getHostels: " + JSON.stringify($scope.hostels));
    });

}]);


