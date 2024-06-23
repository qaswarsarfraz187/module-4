var byeSpeaker = (function (window) {
    var byeSpeaker = {};
    var speakWord = "Goodbye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    return byeSpeaker;

})(window);

byeSpeaker.speak("Alice"); // Output: Goodbye Alice
byeSpeaker.speak("Bob"); // Output: Goodbye Bob
