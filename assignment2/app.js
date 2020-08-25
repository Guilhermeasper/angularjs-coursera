(function () {
    "use strict";
    angular
        .module("ShoppingListCheckOff", [])
        .controller("ShoppingListCheckOffController", function ($scope) {
            $scope.toBuyMessage = "Everything is bought!";
            $scope.alreadyBoughtMessage = "Nothing bought yet.";
            $scope.test;
            $scope.buyList = [
                { name: "Biscoito Treloso", quantity: 3 },
                { name: "Miojo", quantity: 21 },
                { name: "Ração", quantity: 1 },
                { name: "Tapioca", quantity: 13 },
                { name: "Doritos", quantity: 17 },
            ];
            $scope.boughtList = [];
            $scope.checkItem = function (index) {
                $scope.boughtList.push($scope.buyList[index]);
                if($scope.buyList >=1){
                    [$scope.buyList[0], $scope.buyList[index]] = [$scope.buyList[index], $scope.buyList[0]];
                }
                $scope.buyList.pop();
            }
            
        });
})();
