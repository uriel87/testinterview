


app.service('hostingHousesService', ['$http','$q', function ($http, $q) {

    this.getHotels= function () {

        var defer = $q.defer();

        $http.get("./data/select1.json")
            .then(function (response) {
                defer.resolve(response.data);
            });

        return defer.promise;
    }

    this.getHostels = function () {

        var defer = $q.defer()

        $http.get("./data/select2.json")
            .then(function (response) {
                defer.resolve(response.data);
            });

        return defer.promise;
    }

}]);