angular.module('myApp').controller('friendViewCtrl', function ($scope, friendService, $stateParams) {
    $scope.goBack = function () {
        window.history.back();
    };

    $scope.currentFriend = getCurrentFriend(friendService.users);
    function getCurrentFriend(data) {
        for (var i in data) {
            if (data[i].id == $stateParams.id) {
                return data[i];
            }
        }
    }

    $("#lefty").removeClass("selected-footer");
});