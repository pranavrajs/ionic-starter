'use strict';
angular.module('ionic-starter.app-version', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.app-version', {
                url: '/app-version',
                views: {
                    menuContent: {
                        templateUrl: 'modules/app-version/views/app-version.html',
                        controller: 'AppVersionCtrl'
                    }
                }
            });
    }])
    .controller('AppVersionCtrl', ['$scope', '$cordovaAppVersion', function ($scope, $cordovaAppVersion) {

        $scope.getVersion = function () {
            $cordovaAppVersion.getVersionNumber().then(function (version) {
                $scope.appVersionNumber = version;
            });
            $cordovaAppVersion.getVersionCode().then(function (build) {
                $scope.appVersionCode = build;
            });
        };

    }]);
