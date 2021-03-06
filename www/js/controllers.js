angular.module('starter.controllers', ["ionic", "ngCordova"])


.controller('DashCtrl', function ($scope, Nags, $state,$ionicPlatform) {
    $scope.nagger = Nags.getCurrentNagger();
    if ($scope.nagger != null) {
        $scope.endingDate = new Date($scope.nagger.nags[$scope.nagger.nags.length - 2].date);
    }

    $scope.chooseNagger = function () {
        $state.go('tab.naggers');
    };

  $scope.custom = {
    player: null,
    vars: {
      rel: 0,
      showinfo: 0
    }
  };
  $ionicPlatform.on('pause', function(event) {
    var yts = document.getElementsByClassName('yt');
    for (var i = 0; i < yts.length; ++i) {
      yts[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
    }
  });

})

.controller('NagsCtrl', function ($scope, Nags, $ionicHistory, $state, $cordovaLocalNotification) {
    $scope.nagger = Nags.getCurrentNagger();
    $scope.remove = function (nag) {
        if (nag.popup != null) {
            Nags.popup(nag.popup);
        }
        var screenName = $scope.nagger.screenName;
        $scope.nagger = Nags.remove(nag);
        $cordovaLocalNotification.clear(nag.id);
        Nags.setBadgeNumber();
        if ($scope.nagger == null) {
            Nags.completeNagger(screenName);
        }
    };
    $scope.detail = function (nagId) {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.nag-detail', { nagId: nagId });
    };

    $scope.isShowNag = function (dateString) {
        return new Date(dateString) < new Date();
    };

    $scope.isShowCaughtUp = function () {
        return new Date($scope.nagger.nags[0].date) > new Date();
    };

    $scope.chooseNagger = function () {
        $state.go('tab.naggers');
    }
})

.controller('NagDetailCtrl', function ($scope, $stateParams, Nags, $ionicHistory,$ionicPlatform, $state, $cordovaLocalNotification) {
    $scope.nagger = Nags.getCurrentNagger();
    $scope.nag = Nags.get($stateParams.nagId);
    $scope.remove = function (nag) {
        if (nag.popup != null) {
            Nags.popup(nag.popup);
        }
        var screenName = $scope.nagger.screenName;
        $scope.nagger = Nags.remove(nag);
        $cordovaLocalNotification.clear(nag.id);
        Nags.setBadgeNumber();
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        if ($scope.nagger == null) {
            Nags.completeNagger(screenName);
        }
        $state.go('tab.nags');
    };
    $scope.goBack = function () {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.nags');
    };

  $scope.custom = {
    player: null,
    vars: {
      rel: 0,
      showinfo: 0
    }
  };
  $ionicPlatform.on('pause', function(event) {
    var yts = document.getElementsByClassName('yt');
    for (var i = 0; i < yts.length; ++i) {
      yts[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
    }
  });

})

.controller('NaggersCtrl', ['$scope', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification', '$ionicHistory', '$state', '$ionicPopup', 'Nags', function ($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification, $ionicHistory, $state, $ionicPopup, Nags) {
    $ionicPlatform.ready(function () {
        $scope.user = Nags.getUser();
        $scope.naggers = Nags.getAllNaggers($scope.user);
        $scope.nagger = Nags.getCurrentNagger();

        $scope.cancelNagger = function () {
            Nags.clearBadgeNumber();
            Nags.cancelCurrentNagger();
            $scope.nagger = null;
        };

        $scope.showConfirm = function () {
            $ionicPopup.confirm({
                title: 'Cancel Nagger',
                type: 'button-royal',
                template: '<img width=100% ng-src="img/MarinProfile.jpg" /> Are you sure you want to cancel this Nagger?',
                cancelText: 'No',
                okText: 'Yes'
            })
                .then(function (res) {
                    if (res) {
                        $scope.cancelNagger();
                    } else {
                        //do nothing
                    }
                });
        };
        $scope.showLocked = function () {
            $ionicPopup.alert({
                title: '<i class="icon ion-locked icon-accessory"></i> Nagger Locked',
                type: 'button-royal',
                template: '<img width=100% ng-src="img/MarinProfile.jpg" /> This nagger is currently locked. Complete other naggers to unlock this nagger.'
            });
        };

        $scope.scheduleNagger = function (naggerName) {
            $cordovaLocalNotification.cancelAll().then(function (result) {
                $scope.nagger = Nags.setCurrentNaggerByName(naggerName);
                var notifications = [];
                $scope.nagger.nags.forEach(function (nag, index) {
                    var date = new Date();
                    date.setDate(date.getDate() + nag.day);
                    date.setHours(nag.hour);
                    date.setMinutes(nag.minute);
                    date.setSeconds(0);
                    $scope.nagger.nags[index].date = date;
                    var guid = index;//Math.floor((Math.random() * 999999999999999) + 1);
                    $scope.nagger.nags[index].id = guid;
                    if (nag.popupId == null) {
                        var notification = {};
                        notification.id = guid;
                        notification.title = nag.title;
                        notification.text = nag.message;
                        notification.date = date;
                        notification.sound = 'file://sounds/cork-pop.wav';
                        if (notification.date > new Date()) {
                            notifications.push(notification);
                        }
                    }
                });

                $scope.nagger = Nags.setCurrentNaggerByName(naggerName);
                $cordovaLocalNotification.schedule(notifications).then(function (result) {

                });
                $state.go('tab.nag-detail', { nagId: $scope.nagger.nags[0].id });

            }, this);

            $rootScope.$on('$cordovaLocalNotification:click', function (event, notification, state) {
                $state.go('tab.nag-detail', { nagId: notification.id });
            });

            $rootScope.$on('$cordovaLocalNotification:trigger', function (event, notification, state) {
                Nags.setBadgeNumber();
            });


            $ionicHistory.nextViewOptions({
                disableBack: true
            });


        };
    });
}]);
