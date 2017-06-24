angular.module('myApp').controller('friendCtrl', function ($scope, friendService, $state) {
    $scope.goBack = function () {
        window.history.back();
    };
    $scope.users = friendService.sortedUsers();
    $scope.theNewUser = friendService.theUser;
    $scope.currentPage = 0;
    $scope.pageSize = 6;
    $scope.data = [];
    $scope.numberOfPages = function () {
        return Math.ceil($scope.users.length / $scope.pageSize);
    }
    $scope.sortProp = 'last';
    $scope.friendSort = "ASCENDING";
    $scope.changeSort = function (current) {
        $scope.currentPage = 0;
        if (current === "ASCENDING") {
            $scope.friendSort = "DESCENDING";
            $scope.users.sort(function (a, b) {
                if (a.last.toLowerCase() > b.last.toLowerCase()) return -1;
                if (a.last.toLowerCase() < b.last.toLowerCase()) return 1;
                return 0;
            });
            $scope.sortProp = '-last';
        } else {
            $scope.friendSort = "ASCENDING";
            $scope.users.sort(function (a, b) {
                if (a.last.toLowerCase() < b.last.toLowerCase()) return -1;
                if (a.last.toLowerCase() > b.last.toLowerCase()) return 1;
                return 0;
            });
            $scope.sortProp = "last";
        }
    }
    if ($state.current.name == "friends") {
        $("#lefty").addClass("selected-footer");
    } else {
        $("#lefty").removeClass("selected-footer");
    }
    if ($state.current.name == "search") {
        $("#middy").addClass("selected-footer");
    } else {
        $("#middy").removeClass("selected-footer");
    }

    $scope.newUser = function () {
        if (!$scope.fullName || !$scope.tagline || !$scope.bio) {
            alert("All forms are required");
        } else if ($scope.fullName.length > 30) {
            alert("Name too long");
        } else if ($scope.fullName.split(" ").length < 2) {
            alert("Full name must contain first and last names")
        } else if ($scope.tagline.length > 50) {
            alert("Tagline is too long");
        } else {
            let lastName = $scope.fullName.split(' ');
            let firstName = lastName.splice(0, 1);
            firstName = firstName.join();
            lastName = lastName.join(' ');
            friendService.theUser = $scope.users.length;
            friendService.users.push({
                id: friendService.theUser,
                first: firstName,
                last: lastName,
                tagline: $scope.tagline,
                bio: $scope.bio,
                profileUrl: "images/face.jpg",
                fullName: firstName + " " + lastName
            })

        }
        friendService.theUser = friendService.users[friendService.users.length - 1];
        $scope.users = friendService.sortedUsers();
        $state.transitionTo('landing');
        //console.log($scope.theNewUser);
    }
});