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
            "link": "/docs/plugins/appAvailability/",
            "title": "App Availability",
            "keywords": "available",
            "short-title": "AppAvailability"
        }, {
            "link": "/docs/plugins/appRate/",
            "title": "App Rate",
            "keywords": "rating stars",
            "short-title": "AppRate"
        }, {
            "link": "/docs/plugins/appVersion/",
            "title": "App Version",
            "keywords": "version OS ",
            "short-title": "AppVersion"
        }, {
            "link": "/docs/plugins/backgroundGeolocation/",
            "title": "Background Geolocation",
            "keywords": "bg location",
            "short-title": "BackgroundGeolocation"
        }, {
            "link": "/docs/plugins/badge/",
            "title": "Badge",
            "keywords": "badge",
            "short-title": "Badge"
        }, {
            "link": "/docs/plugins/barcodeScanner/",
            "title": "Barcode Scanner",
            "keywords": "qr code barcode",
            "short-title": "BarcodeScanner"
        }, {
            "link": "/docs/plugins/batteryStatus/",
            "title": "Battery Status",
            "keywords": "battery life status",
            "short-title": "BatteryStatus"
        }, {
            "link": "/docs/plugins/calendar/",
            "title": "Calendar",
            "keywords": "date time reminder",
            "short-title": "Calendar"
        }, {
            "link": "/docs/plugins/camera/",
            "title": "Camera",
            "keywords": "picture image",
            "short-title": "Camera"
        }, {
            "link": "/docs/plugins/capture/",
            "title": "Capture",
            "keywords": "record sound music video image",
            "short-title": "Capture"
        }, {
            "link": "/docs/plugins/cardIO/",
            "title": "CardIO",
            "keywords": "cardio card-io billing card number cardscan",
            "short-title": "CardIO"
        }, {
            "link": "/docs/plugins/clipboard/",
            "title": "Clipboard",
            "keywords": "copy paste",
            "short-title": "Clipboard"
        }, {
            "link": "/docs/plugins/contacts/",
            "title": "Contacts",
            "keywords": "contact user ",
            "short-title": "Contacts"
        }, {
            "link": "/docs/plugins/datePicker/",
            "title": "Date Picker",
            "keywords": "date time",
            "short-title": "DatePicker"
        }, {
            "link": "/docs/plugins/device/",
            "title": "Device",
            "keywords": "iPhone Android iPad type",
            "short-title": "Device"
        }, {
            "link": "/docs/plugins/deviceMotion/",
            "title": "Device Motion",
            "keywords": "accelerometer acceleration",
            "short-title": "DeviceMotion"
        }, {
            "link": "/docs/plugins/deviceOrientation/",
            "title": "Device Orientation",
            "keywords": "compass orientation",
            "short-title": "DeviceOrientation"
        }, {
            "link": "/docs/plugins/dialogs/",
            "title": "Dialogs",
            "keywords": "alert confirm prompt beep",
            "short-title": "Dialogs"
        }, {
            "link": "/docs/plugins/emailComposer/",
            "title": "Email Composer",
            "keywords": "email message mail",
            "short-title": "EmailComposer"
        }, {
            "link": "/docs/plugins/facebook/",
            "title": "Facebook",
            "keywords": "facebook login oauth",
            "short-title": "Facebook"
        }, {
            "link": "/docs/plugins/file/",
            "title": "File",
            "keywords": "file absolute path location",
            "short-title": "File"
        }, {
            "link": "/docs/plugins/fileOpener2/",
            "title": "FileOpener2",
            "keywords": "",
            "short-title": "FileOpener2"
        }, {
            "link": "/docs/plugins/fileTransfer/",
            "title": "File Transfer",
            "keywords": "file transfer upload download ",
            "short-title": "FileTransfer"
        }, {
            "link": "/docs/plugins/flashlight/",
            "title": "Flashlight",
            "keywords": "light flash",
            "short-title": "Flashlight"
        }, {
            "link": "/docs/plugins/geolocation/",
            "title": "Geolocation",
            "keywords": "location",
            "short-title": "Geolocation"
        }, {
            "link": "/docs/plugins/globalization/",
            "title": "Globalization",
            "keywords": "language preferences",
            "short-title": "Globalization"
        }, {
            "link": "/docs/plugins/googleAnalytics/",
            "title": "Google Analytics",
            "keywords": "GA",
            "short-title": "GoogleAnalytics"
        }, {
            "link": "/docs/plugins/healthkit/",
            "title": "HealthKit",
            "keywords": "health kit fitness",
            "short-title": "HealthKit"
        }, {
            "link": "/docs/plugins/beacon/",
            "title": "iBeacon",
            "keywords": "iBeacon beacon bluetooth low energy",
            "short-title": "iBeacon"
        }, {
            "link": "/docs/plugins/imagePicker/",
            "title": "Image Picker",
            "keywords": "picture image cameraroll",
            "short-title": "ImagePicker"
        }, {
            "link": "/docs/plugins/inAppBrowser/",
            "title": "In App Browser",
            "keywords": "",
            "short-title": "InAppBrowser"
        }, {
            "link": "/docs/plugins/instagram/",
            "title": "Instagram",
            "keywords": "instagram image share",
            "short-title": "Instagram"
        }, {
            "link": "/docs/plugins/keyboard/",
            "title": "Keyboard",
            "keywords": "",
            "short-title": "Keyboard"
        }, {
            "link": "/docs/plugins/keychain/",
            "title": "Keychain",
            "keywords": "",
            "short-title": "Keychain"
        }, {
            "link": "/docs/plugins/launchNavigator/",
            "title": "Launch Navigator",
            "keywords": "launchNavigator navigator gps",
            "short-title": "LaunchNavigator"
        }, {
            "link": "/docs/plugins/localNotification/",
            "title": "Local Notification",
            "keywords": "",
            "short-title": "LocalNotification"
        }, {
            "link": "/docs/plugins/media/",
            "title": "Media",
            "keywords": "",
            "short-title": "Media"
        }, {
            "link": "/docs/plugins/nativeAudio/",
            "title": "Native Audio",
            "keywords": "",
            "short-title": "NativeAudio"
        }, {
            "link": "/docs/plugins/network/",
            "title": "Network",
            "keywords": "wifi 3G 4G LTE",
            "short-title": "Network"
        }, {
            "link": "/docs/plugins/oauth/",
            "title": "OAuth",
            "keywords": "authentication 0auth",
            "short-title": "OAuth"
        }, {
            "link": "/docs/plugins/pinDialog/",
            "title": "Pin Dialog",
            "keywords": "prompt",
            "short-title": "PinDialog"
        }, {
            "link": "/docs/plugins/preferences/",
            "title": "Preferences",
            "keywords": "",
            "short-title": "Preferences"
        }, {
            "link": "/docs/plugins/progressIndicator/",
            "title": "Progress Indicator",
            "keywords": "activity",
            "short-title": "ProgressIndicator"
        }, {
            "link": "/docs/plugins/pushNotifications/",
            "title": "Push Notifications",
            "keywords": "APN GCM",
            "short-title": "PushNotifications"
        }, {
            "link": "/docs/plugins/socialSharing/",
            "title": "Social Sharing",
            "keywords": "email twitter facebook SMS",
            "short-title": "SocialSharing"
        }, {
            "link": "/docs/plugins/spinnerDialog/",
            "title": "Spinner Dialog",
            "keywords": "",
            "short-title": "SpinnerDialog"
        }, {
            "link": "/docs/plugins/splashscreen/",
            "title": "Splashscreen",
            "keywords": "",
            "short-title": "Splashscreen"
        }, {
            "link": "/docs/plugins/sqlite/",
            "title": "SQLite",
            "keywords": "db database storage",
            "short-title": "SQLite"
        }, {
            "link": "/docs/plugins/statusbar/",
            "title": "StatusBar",
            "keywords": "",
            "short-title": "StatusBar"
        }, {
            "link": "/docs/plugins/toast/",
            "title": "Toast",
            "keywords": "notification notify",
            "short-title": "Toast"
        }, {
            "link": "/docs/plugins/touchID/",
            "title": "TouchID",
            "keywords": "auth authentication",
            "short-title": "TouchID"
        }, {
            "link": "/docs/plugins/vibration/",
            "title": "Vibration",
            "keywords": "beep",
            "short-title": "Vibration"
        }, {
            "link": "/docs/plugins/zip/",
            "title": "ZIP",
            "keywords": "file compress",
            "short-title": "ZIP"
        }];
    }]);
