angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('entry', {
                url: '/',
                templateUrl: 'views/entry.html',
                controller: 'friendCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'friendCtrl'
            })
            .state('landing', {
                url: '/landing',
                templateUrl: 'views/landing.html',
                controller: 'friendCtrl'
            })
            .state('friends', {
                url: '/friends',
                templateUrl: 'views/friends.html',
                controller: 'friendCtrl'
            })
            .state('friendview', {
                url: '/friendview/:id',
                templateUrl: 'views/friendview.html',
                controller: 'friendViewCtrl'
            });
            $urlRouterProvider
            .otherwise('/');
    });


