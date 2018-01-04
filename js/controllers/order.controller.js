

app.controller('orderCtl', ['$scope','hostingHousesService', function ($scope, hostingHousesService) {

    hostingHousesService.getHotels().then(function(data){
        $scope.hotels = data
    });

    hostingHousesService.getHostels().then(function(data){
        $scope.hostels = data
    });

}]);


