'use strict';
angular.module('ionic-starter.contacts', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.contacts', {
                url: '/contacts',
                views: {
                    menuContent: {
                        templateUrl: 'modules/contacts/views/contacts.html',
                        controller: 'Contacts'
                    }
                }
            });
    }])
    .controller('Contacts', ['$scope', '$cordovaContacts', function ($scope, $cordovaContacts) {

        $scope.searchContacts = function (contactName) {
            var opts = { //search options
                filter: searchTerm, // 'Bob'
                multiple: true, // Yes, return any contact that matches criteria
                fields: ['displayName', 'name'] // These are the fields to search for 'bob'.
                desiredFields: [id]; //return fields.
            };

            if ($ionicPlatform.isAndroid()) {
                opts.hasPhoneNumber = true; //hasPhoneNumber only works for android.
            };

            $cordovaContacts.find(opts).then(function (contactsFound) {
                $scope.contacts = contactsFound;
            });
        };
    }]);
