'use strict';
angular.module('ionic-starter.barcode-scanner', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.barcode-scanner', {
                url: '/barcode-scanner',
                views: {
                    menuContent: {
                        templateUrl: 'modules/barcode-scanner/views/barcode-scanner.html',
                        controller: 'BarCodeScannerCtrl'
                    }
                }
            });
    }])
    .controller('BarCodeScannerCtrl', ['$scope', '$cordovaBarcodeScanner', function ($scope, $cordovaBarcodeScanner) {

        $scope.scanBarcode = function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {

                    $scope.message = barcodeData.text;
                    // Success! Barcode data is here
                }, function (error) {
                    $scope.message = 'No data found';
                    // An error occurred
                });

        };
        
    }]);
