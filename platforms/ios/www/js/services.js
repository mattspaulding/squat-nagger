angular.module('starter.services', ["ionic", "ngCordova"])

.factory('Nags', function ($cordovaLocalNotification) {

    var naggers = [
        {
            name: 'Patty Poopchute',
            screenName: 'PattyPoopchute',
            face: 'img/PattyPoopchute.jpg',
            level: 'Easy',
            caughtUpMessage0: 'Take a break.',
            caughtUpMessage1: 'I will nag you in a bit.',
            caughtUpMessage2: 'I have to change the litter box anyway.',
            getToWorkMessage0: 'Get to work.',
            getToWorkMessage1: 'Or don\'t.',
            getToWorkMessage2: 'Whatever.',
            nags: [{
                title: 'Ho hum, I\'m Patty',
                message: 'They told me I am your nagger.',
                details: 'I really don\'t want to be doing this right now. And anyway I need to feed my cats. (It is a long process.) Let\'s just start off with a quick exercise then we\'ll pick back up tomorrow morning. Mmmk?',
                done: "Mmmk",
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '5 Squats',
                message: 'Let\'s start with some squats.',
                details: 'So how this works is I tell you what to do and Marin shows you how to do it. Got it? Great.',
                video: 'squats',
                popup: 1,
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: 'Hey',
                message: 'Just checking in.',
                details: 'I\'m glad to see that you got started. Patty doesn\'t make great first impressions, but I assure you she cares about you. Get a good night of sleep. We\'ll pick back up in the morning.',
                face: 'img/MarinProfile.jpg',
                popupId: 1,
                day: 990,
                hour: 0,
                minute: 0
            }, {
                title: '10 Sumo Squats',
                message: 'I hate mornings.',
                video: 'sumo-squats',
                day: 1,
                hour: 9,
                minute: 0
            }, {
                title: 'Touch your toes 20 sec.',
                message: 'Oh boy. I\'m sore.',
                video: 'toe-touch',
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
                video: 'quad-stretch',
                day: 3,
                hour: 8,
                minute: 26
            }, {
                title: '15 Curtsy Lunges',
                message: 'These are the worst.',
                video: 'curtsy-lunges',
                popup: 2,
                day: 3,
                hour: 17,
                minute: 15
            }, {
                title: 'Congrats',
                message: 'You did it!',
                details: 'You made it through the Patty Poopchute track. Try the Callie Caboose track next.',
                face: 'img/Trophy.jpg',
                popupId: 2,
                day: 990,
                hour: 0,
                minute: 0
            }]
        }, {
            name: 'Callie Caboose',
            screenName: 'CallieCaboose',
            face: 'img/CallieCaboose.jpg',
            level: 'Moderate',
            caughtUpMessage0: 'Take a break.',
            caughtUpMessage1: 'I will nag you in a bit.',
            caughtUpMessage2: 'I have to make snacks for the kids.',
            getToWorkMessage0: 'Get to work.',
            getToWorkMessage1: '',
            getToWorkMessage2: 'You can do it!',
            nags: [{
                title: 'Welcome, my name is Callie',
                message: 'I am going to be your nagger for this track.',
                details: 'I have to take the kids to soccer practice in a bit, but I have a few minutes to get you started with some exercises. How does that sound?',
                done: "Good",
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '15 Squats',
                message: 'Let\'s start with some squats.',
                details: 'Make sure you are doing them properly.',
                video: 'squats',
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: '15 Lunges',
                message: 'And then some lunges.',
                video: 'lunges',
                popup: 1,
                day: 0,
                hour: 0,
                minute: 0
            }, {
                title: 'Alrighty',
                message: 'Day 1 done.',
                details: 'I have to scadootle. There is no rest for Soccer Mom. We\'ll get back to it tomorrow right after I drop off the kids at school.',
                face: 'img/MarinProfile.jpg',
                done: "See you then",
                popupId: 1,
                popup: 2,
                day: 990,
                hour: 0,
                minute: 0
            }, {
                title: 'Hello',
                message: 'Checking in.',
                details: 'I see Callie is getting you warmed up. I will check back in with you later.',
                face: 'img/MarinProfile.jpg',
                done: "OK",
                popupId: 2,
                day: 990,
                hour: 0,
                minute: 0
            }, {
                title: '20 Sumo Squats',
                message: 'Rise and shine sleepy head.',
                video: 'sumo-squats',
                day: 1,
                hour: 9,
                minute: 0
            }, {
                title: '20 Donkey Kicks',
                message: 'Rise and shine sleepy head.',
                video: 'donkey-kicks',
                day: 1,
                hour: 9,
                minute: 0
            }, {
                title: 'Touch your toes 30 sec.',
                message: 'Stretching is important.',
                video: 'toe-touch',
                day: 2,
                hour: 8,
                minute: 30
            }, {
                title: 'Quad stretch 30 sec.',
                message: 'We don\'t want cramps.',
                video: 'quad-stretch',
                day: 2,
                hour: 8,
                minute: 31
            }, {
                title: '30 Squat Pulses',
                message: 'Burn off that dinner.',
                video: 'squat-pulses',
                day: 2,
                hour: 19,
                minute: 30
            }, {
                title: '40 sec Quad Stretch',
                message: 'Streeeeeeeeetch.',
                video: 'quad-stretch',
                day: 3,
                hour: 8,
                minute: 26
            }, {
                title: '15 Squat Jumps',
                message: 'End it with a bang.',
                video: 'squat-jumps',
                popup: 3,
                day: 3,
                hour: 17,
                minute: 15
            }, {
                title: 'Congrats',
                message: 'You did it!',
                details: 'You made it through the Callie Caboose track. Try the Tina Tush track next.',
                face: 'img/Trophy.jpg',
                popupId: 3,
                day: 990,
                hour: 0,
                minute: 0
            }]
        }, {
            name: 'Tina Tush',
            screenName: 'TinaTush',
            face: 'img/TinaTush.jpg',
            level: 'Advanced',
            caughtUpMessage0: 'Take a break.',
            caughtUpMessage1: 'I will nag you in a bit.',
            caughtUpMessage2: 'I have to change the litter box anyway.',
            getToWorkMessage0: 'Get to work.',
            getToWorkMessage1: 'Or don\'t.',
            getToWorkMessage2: 'Whatever.',
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
                hour: 0,
                minute: 0
            }, {
                title: '20 Squats',
                message: 'Let\'s burn it.',
                day: 0,
                hour: 0,
                minute: 0
            }]
        }, {
            name: 'Helga Hindquarters',
            screenName: 'HelgaHindquarters',
            face: 'img/HelgaHindquarters.jpg',
            level: 'Extreme',
            caughtUpMessage0: 'Take a break.',
            caughtUpMessage1: 'Let your glutes recover.',
            caughtUpMessage2: 'You will need the rest.',
            getToWorkMessage0: 'Get to work.',
            getToWorkMessage1: 'Or don\'t.',
            getToWorkMessage2: 'Whatever.',
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

    var userInit = {
        progress:
            [{
                screenName: 'PattyPoopchute',
                amount: 0,
                isUnlocked: true
            }, {
                screenName: 'CallieCaboose',
                amount: 0,
                isUnlocked: true
            }, {
                screenName: 'TinaTush',
                amount: 0,
                isUnlocked: false
            }, {
                screenName: 'HelgaHindquarters',
                amount: 0,
                isUnlocked: false
            }]
    };



    return {
        getUser: function () {
            var savedUser = JSON.parse(window.localStorage.getItem("user"));
            if (savedUser == null) {
                window.localStorage.setItem("user", JSON.stringify(userInit));
                return userInit;
            }
            return savedUser;
        },
        getAllNaggers: function (user) {
            for (var i = 0; i < naggers.length; i++) {
                for (var j = 0; j < user.progress.length; j++) {
                    if (user.progress[j].screenName == naggers[i].screenName) {
                        naggers[i].amount = user.progress[j].amount;
                        naggers[i].isUnlocked = user.progress[j].isUnlocked;
                    }
                }
            }
            return naggers;
        },
        completeNagger: function (screenName) {
            debugger;
            var user = JSON.parse(window.localStorage.getItem("user"));
            for (var i = 0; i < user.progress.length; i++) {
                if (user.progress[i].screenName == screenName) {
                    user.progress[i].amount++;
                    if (i < user.progress.length - 1) {
                        user.progress[i + 1].isUnlocked = true;
                    }
                }
            }
            window.localStorage.setItem("user", JSON.stringify(user));
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
            return currentNagger;
        },
        cancelCurrentNagger: function () {
            window.localStorage.setItem("currentNagger", null);
            $cordovaLocalNotification.cancelAll();
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
            });
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
