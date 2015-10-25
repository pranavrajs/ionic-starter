'use strict';
angular.module('ionic-starter.app-rate', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.app-rate', {
                url: '/app-rate',
                views: {
                    menuContent: {
                        templateUrl: 'modules/app-rate/views/app-rate.html',
                        controller: 'AppRateCtrl'
                    }
                }
            });
    }])
    .controller('AppRateCtrl', ['$scope', function ($scope) {

        $scope.rateApp = function () {
            if (ionic.Platform.isIOS()) {
                //you need to set your own ios app id
                AppRate.preferences.storeAppURL.ios = '1234555553';
                AppRate.promptForRating(true);
            } else if (ionic.Platform.isAndroid()) {
                //you need to set your own android app id
                AppRate.preferences.storeAppURL.android = 'market://details?id=com.whatsapp';
                AppRate.promptForRating(true);
            }
        };
    }]);
