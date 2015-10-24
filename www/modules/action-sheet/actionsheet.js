'use strict';
angular.module('ionic-starter.action-sheet', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.action-sheet', {
                url: '/action-sheet',
                views: {
                    menuContent: {
                        templateUrl: 'modules/action-sheet/views/action-sheet.html',
                        controller: 'ActionSheetCtrl'
                    }
                }
            });
    }])
    .controller('ActionSheetCtrl', ['$scope', '$cordovaActionSheet', '$ionicPlatform', function ($scope, $cordovaActionSheet, $ionicPlatform) {
        // Options for action sheet
        var options = {
            title: 'What do you want with this button?',
            buttonLabels: ['Share via Facebook', 'Share via Twitter'],
            addCancelButtonWithLabel: 'Cancel',
            androidEnableCancelButton: true,
            winphoneEnableCancelButton: true,
            addDestructiveButtonWithLabel: 'Delete it'
        };
        $scope.showActionSheet = function () {
        	// On button click show UIActionSheet in iOS and alertDialog in Android
            $cordovaActionSheet.show(options)
                .then(function (btnIndex) {
                	// On click on an item in action sheet 
                    $scope.onActionSheetButtonClick(btnIndex);
                });
        };
        $scope.onActionSheetButtonClick = function (index) {
        	// Change message according to button clicked
        	switch (index) {
        		case 1: 
        			$scope.message = 'Selected delete button';
        			break;
        		case 2: 
        			$scope.message = 'Selected shareVia Facebook';
        			break;
        		case 3: 
        			$scope.message = 'Selected shareVia Twitter';
        			break;
        	}
        };
    }]);
