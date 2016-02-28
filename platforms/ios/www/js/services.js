angular.module('starter.services', ["ionic", "ngCordova"])

.factory('Nags', function ($cordovaLocalNotification) {
    // Might use a resource here that returns a JSON array

    var naggers = [
        {
            name: 'Sally Slumpbottom',
            face: 'img/SallySlumpbottom.jpg',
            level: 'Easy',
            isUnlocked: true,
            caughtUpMessage0: 'Take a break.',
            caughtUpMessage1: 'I will nag you in a bit.',
            caughtUpMessage2: 'I have to change the litter box anyway.',
            getToWorkMessage0: 'Get to work.',
            getToWorkMessage1: 'Or don\'t.',
            getToWorkMessage2: 'Whatever.',
            nags: [{
                title: 'Ho hum, I\'m Sally',
                message: 'They told me I am your nagger.',
                details: 'I really don\'t want to be doing this right now. And anyway I need to feed my cats. (It is a long process.) Let\'s just start off with a quick exercise then we\'ll pick back up tomorrow morning. Mmmk?',
                done: "Mmmk",
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '5 lunges',
                message: 'Let\'s start with some squats.',
                video: 'lunges',
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '5 sumos',
                message: 'Let\'s start with some squats.',
                video: 'sumo-squats',
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '5 pulse',
                message: 'Let\'s start with some squats.',
                video: 'squat-pulses',
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '5 Squats',
                message: 'Let\'s start with some squats.',
                video: 'squats',
                popup: 1,
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: 'Yo',
                message: 'What up',
                details: 'the details',
                face: 'img/MarinProfile.jpg',
                popupId: 1,
                day: 990,
                hour: 0,
                minute: 0
            }, {
                title: '10 Squats',
                message: 'Rise and shine sleepy head.',
                video: 'squats',
                day: 1,
                hour: 9,
                minute: 0
            }, {
                title: 'Touch your toes 20 sec.',
                message: 'Oh boy. I\'m sore.',
                video: 'toes',
                day: 2,
                hour: 8,
                minute: 30
            }, {
                title: '8 Lunges',
                message: 'I\'m missing Matlock for this.',
                video: 'lunges',
                day: 2,
                hour: 19,
                minute: 30
            }, {
                title: '20 sec Quad Stretch',
                message: 'These legs haven\'t seen this much action in 3 decades.',
                video: 'quad',
                day: 3,
                hour: 8,
                minute: 26
            }, {
                title: '15 Curtsey Lunges',
                message: 'These are the worst.',
                video: 'curtsy-lunges',
                day: 3,
                hour: 17,
                minute: 15
            }]
        },
        {
            name: 'Margery Moderation',
            face: 'https://cdnil1.fiverrcdn.com/photos/2795414/original/1590.jpg?1393353812',
            level: 'Moderate',
            nags: [{
                title: 'Hello',
                message: 'Welcome to Squat Nagger!',
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '15 Squats',
                message: 'Let\'s do some squats.',
                day: 0,
                hour: 16,
                minute: 26
            }, {
                title: '20 Squats',
                message: 'Let\'s burn it.',
                day: 0,
                hour: 16,
                minute: 27
            }]
        },
       {
           name: 'Maddie Motheroftwo',
           face: 'http://images.agoramedia.com/wte3.0/gcms/just-for-mom-article.jpg',
           level: 'Moderate',
           nags: [{
               title: 'Hello',
               message: 'Welcome to Squat Nagger!',
               day: 0,
               hour: 0,
               minute: 0
           }, {
               title: '15 Squats',
               message: 'Let\'s do some squats.',
               day: 0,
               hour: 16,
               minute: 26
           }, {
               title: '20 Squats',
               message: 'Let\'s burn it.',
               day: 0,
               hour: 16,
               minute: 27
           }]
       },
       {
           name: 'Lily Likewhatever',
           face: 'http://i5.walmartimages.com/dfw/dce07b8c-26ed/k2-_37fcad99-ab2f-4f3a-9001-5f463f78a69a.v2.jpg',
           level: 'Hard',
           nags: [{
               title: 'Hello',
               message: 'Welcome to Squat Nagger!',
               day: 0,
               hour: 0,
               minute: 0
           }, {
               title: '15 Squats',
               message: 'Let\'s do some squats.',
               day: 0,
               hour: 16,
               minute: 26
           }, {
               title: '20 Squats',
               message: 'Let\'s burn it.',
               day: 0,
               hour: 16,
               minute: 27
           }]
       },
        {
            name: 'Bobbi & Bonnie Bunz',
            face: 'https://cdnil1.fiverrcdn.com/photos/2044703/original/image.jpg?1449095649',
            level: 'Advanced',
            nags: [{
                title: 'Hello',
                message: 'Welcome to Squat Nagger!',
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '15 Squats',
                message: 'Let\'s do some squats.',
                day: 0,
                hour: 16,
                minute: 26
            }, {
                title: '20 Squats',
                message: 'Let\'s burn it.',
                day: 0,
                hour: 16,
                minute: 27
            }]
        }
    ];

    return {
        //all: function () {
        //    return naggers[0].nags;
        //},
        getAllNaggers: function () {
            return naggers;
        },
        getNaggerByName: function (name) {
            for (var i = 0; i < naggers.length; i++) {
                if (naggers[i].name === name) {
                    return naggers[i];
                }
            }
            throw "Couldn't find object with name: " + name;
        },
        remove: function (nag) {
            var currentNagger = JSON.parse(window.localStorage.getItem("currentNagger"));
            for (var i = 0; i < currentNagger.nags.length; i++) {
                if (currentNagger.nags[i].id === nag.id) {
                    currentNagger.nags.splice(i, 1);
                }
            }

            if (currentNagger.nags.length == 0) {
                currentNagger = null;
            }
            window.localStorage.setItem("currentNagger", JSON.stringify(currentNagger));
        },
        cancelCurrentNagger: function () {
            window.localStorage.setItem("currentNagger", null);
            $cordovaLocalNotification.cancelAll().then(function (result) {
                // ...
            });
            //cordova.plugins.notification.local.cancelAll();
        },
        setCurrentNaggerByName: function (name) {
            for (var i = 0; i < naggers.length; i++) {
                if (naggers[i].name === name) {
                    window.localStorage.setItem("currentNagger", JSON.stringify(naggers[i]));
                    return naggers[i];
                }
            }
            throw "Couldn't find object with name: " + name;
        },
        getCurrentNagger: function () {
            return JSON.parse(window.localStorage.getItem("currentNagger"));
        },
        clearBadgeNumber: function () {
            var nagger = JSON.parse(window.localStorage.getItem("currentNagger"));
            $cordovaLocalNotification.update({
                id: nagger.nags[0].id,
                badge: 0
            }).then(function (result) {
                // ...
            });
            //cordova.plugins.notification.local.update({
            //    id: nagger.nags[0].id,
            //    badge: 0
            //});
        },
        setBadgeNumber: function () {
            var nagger = JSON.parse(window.localStorage.getItem("currentNagger"));
            var count = 0;
            if (nagger != null) {
                nagger.nags.forEach(function (nag, index) {
                    if (new Date(nagger.nags[index].date) < new Date()) {
                        count++;
                    }
                });

                $cordovaLocalNotification.update({
                    id: nagger.nags[0].id,
                    badge: count
                }).then(function (result) {
                    // ...
                });
            }

        },
        get: function (nagId) {
            var currentNagger = JSON.parse(window.localStorage.getItem("currentNagger"));
            for (var i = 0; i < currentNagger.nags.length; i++) {
                if (currentNagger.nags[i].id === parseInt(nagId)) {
                    return currentNagger.nags[i];
                }
            }
            return null;
        },
        popup: function (popup) {
            var currentNagger = JSON.parse(window.localStorage.getItem("currentNagger"));
            for (var i = 0; i < currentNagger.nags.length; i++) {
                if (currentNagger.nags[i].popupId === parseInt(popup)) {
                    currentNagger.nags[i].date = new Date();
                }
            }
            window.localStorage.setItem("currentNagger", JSON.stringify(currentNagger));
        }
    };
});
