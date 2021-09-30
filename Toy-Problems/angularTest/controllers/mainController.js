app.controller('mainController', ['$scope', function($scope) {
    $scope.list = ['Finish angular test', 'Nail interview', 'Get job'];
    $scope.addNewItem = function() {
        $scope.list.push($scope.newItem)
    }
}])