// main.js

(function () {
    var names = ["adam", "amy", "Jon", "paro", "nakual", "joseph", "henry", "qaswar", "pablo", "yujin];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
