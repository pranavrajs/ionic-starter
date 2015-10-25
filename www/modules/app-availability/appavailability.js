'use strict';
angular.module('ionic-starter.app-availability', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.app-availability', {
                url: '/app-availability',
                views: {
                    menuContent: {
                        templateUrl: 'modules/app-availability/views/app-availability.html',
                        controller: 'AppAvailabilityCtrl'
                    }
                }
            });
    }])
    .controller('AppAvailabilityCtrl', ['$scope', '$cordovaAppAvailability', '$ionicPlatform', function ($scope, $cordovaAppAvailability, $ionicPlatform) {
        $scope.isAppAvailable = function (appName) {
            var iOSPackageName, androidPackageName, seachPackageName;
            switch (appName) {
                case 'twitter':
                    iOSPackageName = 'twitter://';
                    androidPackageName = 'com.twitter.android';
                    break;

                case 'facebook':
                    iOSPackageName = 'fb://';
                    androidPackageName = 'com.facebook.katana';
                    break;

                case 'whatsapp':
                    iOSPackageName = 'whatsapp://';
                    androidPackageName = 'com.whatsapp';
                    break;

                default:
                    return;
            }
            if (ionic.Platform.isAndroid()) {
                seachPackageName = androidPackageName;
            } else if (ionic.Platform.isIOS()) {
                seachPackageName = androidPackageName;
            } else {
                return;
            }
            $cordovaAppAvailability.check(seachPackageName)
                .then(function () {
                    $scope.message = 'App is available';
                }, function () {
                    $scope.message = 'App is not available';
                });
        };
    }]);
