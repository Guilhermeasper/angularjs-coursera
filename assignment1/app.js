(function () {
    "use strict";
    angular
        .module("LunchChecker", [])
        .controller("LunchCheckerController", function ($scope) {
            $scope.stringDishList = "";
            $scope.response = "";
            $scope.fontColor = "black";
            $scope.borderStyle = "hide";
            $scope.checkList = function () {
                let size = amountOfValidDishes($scope.stringDishList);
                if ($scope.stringDishList == "") {
                    $scope.fontColor = 'red';
                    $scope.borderStyle = 'solid 1px red';
                    $scope.response = "Please enter data first";
                } else if (size <= 3) {
                    $scope.borderStyle = 'solid 1px green';
                    $scope.fontColor = 'green';
                    $scope.response = "Enjoy!";
                } else {
                    $scope.borderStyle = 'solid 1px green';
                    $scope.fontColor = 'green';
                    $scope.response = "Too much!";
                }
            };

            function amountOfValidDishes(dishes) {
                // Split the string of dishes and then filter the array
                // removing empty strings
                let validDishes = dishes.split(",").filter((item) => {
                    if (item.trim() != "") {
                        return item;
                    }
                });
                return validDishes.length;
            }
        });
})();
