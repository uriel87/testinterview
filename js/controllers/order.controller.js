

app.controller('orderCtl', ['$scope','hostingHousesService', function ($scope, hostingHousesService) {

    $scope.cart = [];

    hostingHousesService.getHotels().then(function(data){
        $scope.hotels = data
        // console.log("$scope.getHotels: " + JSON.stringify($scope.hotels));
    });

    hostingHousesService.getHostels().then(function(data){
        $scope.hostels = data
        // console.log("$scope.getHostels: " + JSON.stringify($scope.hostels));
    });

    // $scope.addToCart = function (product) {
    //     // console.log("product: " + JSON.stringify(product));
    //
    //
    //     var found = false;
    //     $scope.cart.forEach(function (item) {
    //         if (item.id == product.id) {
    //             item.quantity++;
    //             found = true;
    //         }
    //     });
    //     if (!found) {
    //         $scope.cart.push(angular.extend(product, {quantity: 1}, product));
    //     }
    // };

}]);


