angular.module('myApp').service('friendService', function () {

    this.theUser = {
        id: -1,
        first: "No",
        last: "User",
        tagline: "None",
        bio: "none",
        profileUrl: "images/face.jpg"
    }

    this.users = [
        {
            id: 0,
            first: "Trix",
            last: "Rabbit",
            tagline: "Just for kids",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/userimages/trix-rabbit.png",
            fullName: "Trix Rabbit"
        },
        {
            id: 1,
            first: "Test",
            last: "User2",
            tagline: "A tagline2",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/face.jpg",
            fullName: "Test User2"
        },
        {
            id: 2,
            first: "Test",
            last: "User3",
            tagline: "A tagline3",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/face.jpg",
            fullName: "Test User3"
        },
        {
            id: 3,
            first: "Tony",
            last: "The Tiger",
            tagline: "They're great!",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/userimages/tony-tiger.jpg",
            fullName: "Tony The Tiger"
        },
        {
            id: 4,
            first: "Test",
            last: "User5",
            tagline: "A tagline5",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/face.jpg",
            fullName: "Test User5"
        },
        {
            id: 5,
            first: "Test",
            last: "User6",
            tagline: "A tagline6",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/face.jpg",
            fullName: "Test User6"
        },
        {
            id: 6,
            first: "Test",
            last: "User7",
            tagline: "A tagline7",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/face.jpg",
            fullName: "Test User7"
        },
        {
            id: 7,
            first: "Captain",
            last: "Crunch",
            tagline: "Arrrrgh",
            bio: "Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1 Bio1",
            profileUrl: "images/userimages/capn-crunch.jpg",
            fullName: "Captain Crunch"
        }

    ];

    this.sortedUsers = function () {
        var sortedArr = [];
        for (var key in this.users) {
            if (this.users[key].id !== this.theUser.id) {
                sortedArr.push(this.users[key]);
            }
        }
        sortedArr.sort(function (a, b) {
            if (a.last.toLowerCase() < b.last.toLowerCase()) return -1;
            if (a.last.toLowerCase() > b.last.toLowerCase()) return 1;
            return 0;
        });
        return sortedArr;
    }

});