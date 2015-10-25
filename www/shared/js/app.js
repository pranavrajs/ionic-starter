/*global angular, window, cordova, StatusBar */
'use strict';
angular.module('ionic-starter', [
        'ionic',
        'ngCordova',
        'ionic-starter.home',
        'ionic-starter.action-sheet',
        'ionic-starter.app-availability',
        'ionic-starter.app-rate',
        'ionic-starter.app-version',
        'ionic-starter.badge',
        'ionic-starter.barcode-scanner',
        'ionic-starter.contacts'
    ])
    .run(['$ionicPlatform', function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$cordovaAppRateProvider', function ($stateProvider, $urlRouterProvider, $cordovaAppRateProvider) {
        // Abstract State Init
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'shared/views/sidemenu/menu.html'
            });

    }]);
