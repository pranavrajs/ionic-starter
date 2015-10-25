'use strict';
angular.module('ionic-starter.home', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    menuContent: {
                        templateUrl: 'modules/home/views/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/app/home');
    })
    .controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.pluginList = [{
            "link": "#/app/action-sheet",
            "title": "Action Sheet",
            "keywords": "popup",
            "short-title": "ActionSheet"
        }, {
            "link": "#/app/app-availability",
            "title": "App Availability",
            "keywords": "available",
            "short-title": "AppAvailability"
        }, {
            "link": "#/app/app-rate",
            "title": "App Rate",
            "keywords": "rating stars",
            "short-title": "AppRate"
        }, {
            "link": "#/app/home",
            "title": "App Version",
            "keywords": "version OS ",
            "short-title": "AppVersion"
        }, {
            "link": "#/app/home",
            "title": "Background Geolocation",
            "keywords": "bg location",
            "short-title": "BackgroundGeolocation"
        }, {
            "link": "#/app/home",
            "title": "Badge",
            "keywords": "badge",
            "short-title": "Badge"
        }, {
            "link": "#/app/home",
            "title": "Barcode Scanner",
            "keywords": "qr code barcode",
            "short-title": "BarcodeScanner"
        }, {
            "link": "#/app/home",
            "title": "Battery Status",
            "keywords": "battery life status",
            "short-title": "BatteryStatus"
        }, {
            "link": "#/app/home",
            "title": "Calendar",
            "keywords": "date time reminder",
            "short-title": "Calendar"
        }, {
            "link": "#/app/home",
            "title": "Camera",
            "keywords": "picture image",
            "short-title": "Camera"
        }, {
            "link": "#/app/home",
            "title": "Capture",
            "keywords": "record sound music video image",
            "short-title": "Capture"
        }, {
            "link": "#/app/home",
            "title": "CardIO",
            "keywords": "cardio card-io billing card number cardscan",
            "short-title": "CardIO"
        }, {
            "link": "#/app/home",
            "title": "Clipboard",
            "keywords": "copy paste",
            "short-title": "Clipboard"
        }, {
            "link": "#/app/home",
            "title": "Contacts",
            "keywords": "contact user ",
            "short-title": "Contacts"
        }, {
            "link": "#/app/home",
            "title": "Date Picker",
            "keywords": "date time",
            "short-title": "DatePicker"
        }, {
            "link": "#/app/home",
            "title": "Device",
            "keywords": "iPhone Android iPad type",
            "short-title": "Device"
        }, {
            "link": "#/app/home",
            "title": "Device Motion",
            "keywords": "accelerometer acceleration",
            "short-title": "DeviceMotion"
        }, {
            "link": "#/app/home",
            "title": "Device Orientation",
            "keywords": "compass orientation",
            "short-title": "DeviceOrientation"
        }, {
            "link": "#/app/home",
            "title": "Dialogs",
            "keywords": "alert confirm prompt beep",
            "short-title": "Dialogs"
        }, {
            "link": "#/app/home",
            "title": "Email Composer",
            "keywords": "email message mail",
            "short-title": "EmailComposer"
        }, {
            "link": "#/app/home",
            "title": "Facebook",
            "keywords": "facebook login oauth",
            "short-title": "Facebook"
        }, {
            "link": "#/app/home",
            "title": "File",
            "keywords": "file absolute path location",
            "short-title": "File"
        }, {
            "link": "#/app/home",
            "title": "FileOpener2",
            "keywords": "",
            "short-title": "FileOpener2"
        }, {
            "link": "#/app/home",
            "title": "File Transfer",
            "keywords": "file transfer upload download ",
            "short-title": "FileTransfer"
        }, {
            "link": "#/app/home",
            "title": "Flashlight",
            "keywords": "light flash",
            "short-title": "Flashlight"
        }, {
            "link": "#/app/home",
            "title": "Geolocation",
            "keywords": "location",
            "short-title": "Geolocation"
        }, {
            "link": "#/app/home",
            "title": "Globalization",
            "keywords": "language preferences",
            "short-title": "Globalization"
        }, {
            "link": "#/app/home",
            "title": "Google Analytics",
            "keywords": "GA",
            "short-title": "GoogleAnalytics"
        }, {
            "link": "#/app/home",
            "title": "HealthKit",
            "keywords": "health kit fitness",
            "short-title": "HealthKit"
        }, {
            "link": "#/app/home",
            "title": "iBeacon",
            "keywords": "iBeacon beacon bluetooth low energy",
            "short-title": "iBeacon"
        }, {
            "link": "#/app/home",
            "title": "Image Picker",
            "keywords": "picture image cameraroll",
            "short-title": "ImagePicker"
        }, {
            "link": "#/app/home",
            "title": "In App Browser",
            "keywords": "",
            "short-title": "InAppBrowser"
        }, {
            "link": "#/app/home",
            "title": "Instagram",
            "keywords": "instagram image share",
            "short-title": "Instagram"
        }, {
            "link": "#/app/home",
            "title": "Keyboard",
            "keywords": "",
            "short-title": "Keyboard"
        }, {
            "link": "#/app/home",
            "title": "Keychain",
            "keywords": "",
            "short-title": "Keychain"
        }, {
            "link": "#/app/home",
            "title": "Launch Navigator",
            "keywords": "launchNavigator navigator gps",
            "short-title": "LaunchNavigator"
        }, {
            "link": "#/app/home",
            "title": "Local Notification",
            "keywords": "",
            "short-title": "LocalNotification"
        }, {
            "link": "#/app/home",
            "title": "Media",
            "keywords": "",
            "short-title": "Media"
        }, {
            "link": "#/app/home",
            "title": "Native Audio",
            "keywords": "",
            "short-title": "NativeAudio"
        }, {
            "link": "#/app/home",
            "title": "Network",
            "keywords": "wifi 3G 4G LTE",
            "short-title": "Network"
        }, {
            "link": "#/app/home",
            "title": "OAuth",
            "keywords": "authentication 0auth",
            "short-title": "OAuth"
        }, {
            "link": "#/app/home",
            "title": "Pin Dialog",
            "keywords": "prompt",
            "short-title": "PinDialog"
        }, {
            "link": "#/app/home",
            "title": "Preferences",
            "keywords": "",
            "short-title": "Preferences"
        }, {
            "link": "#/app/home",
            "title": "Progress Indicator",
            "keywords": "activity",
            "short-title": "ProgressIndicator"
        }, {
            "link": "#/app/home",
            "title": "Push Notifications",
            "keywords": "APN GCM",
            "short-title": "PushNotifications"
        }, {
            "link": "#/app/home",
            "title": "Social Sharing",
            "keywords": "email twitter facebook SMS",
            "short-title": "SocialSharing"
        }, {
            "link": "#/app/home",
            "title": "Spinner Dialog",
            "keywords": "",
            "short-title": "SpinnerDialog"
        }, {
            "link": "#/app/home",
            "title": "Splashscreen",
            "keywords": "",
            "short-title": "Splashscreen"
        }, {
            "link": "#/app/home",
            "title": "SQLite",
            "keywords": "db database storage",
            "short-title": "SQLite"
        }, {
            "link": "#/app/home",
            "title": "StatusBar",
            "keywords": "",
            "short-title": "StatusBar"
        }, {
            "link": "#/app/home",
            "title": "Toast",
            "keywords": "notification notify",
            "short-title": "Toast"
        }, {
            "link": "#/app/home",
            "title": "TouchID",
            "keywords": "auth authentication",
            "short-title": "TouchID"
        }, {
            "link": "#/app/home",
            "title": "Vibration",
            "keywords": "beep",
            "short-title": "Vibration"
        }, {
            "link": "#/app/home",
            "title": "ZIP",
            "keywords": "file compress",
            "short-title": "ZIP"
        }];
    }]);
