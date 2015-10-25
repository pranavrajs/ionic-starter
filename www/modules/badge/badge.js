'use strict';
angular.module('ionic-starter.badge', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.badge', {
                url: '/badge',
                views: {
                    menuContent: {
                        templateUrl: 'modules/badge/views/badge.html',
                        controller: 'BadgeCtrl'
                    }
                }
            });
    }])
    .controller('BadgeCtrl', ['$scope', '$cordovaBadge', function ($scope, $cordovaBadge) {

        $scope.addBadge = function () {
            $cordovaBadge.set(3).then(function (badge) {
                $scope.message = "Success ! A badge with count 3 has been set";
                // You have permission, badge returned.
            }, function (err) {
                $scope.message = "You don't have permission to use badge feature";
                // You do not have permission.
            });
        };
        $scope.clearBadge = function () {
            $cordovaBadge.clear().then(function (badge) {
                $scope.message = "Badge has been cleared";
                // You have permission, badge returned.
            }, function (err) {
                $scope.message = "You don't have permission to use badge feature";
                // You do not have permission.
            });
        };
    }]);
