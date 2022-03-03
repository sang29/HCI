// var myElement = document.getElementById('myElement');

var mc = new Hammer.Manager(this.document);
// var mc = new Hammer.Manager(this.document, {
// 	recognizers: [
// 		// RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
// 		[Hammer.Rotate],
// 		[Hammer.Pinch, { enable: true }],
// 		[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL }],
// 	]
// });

// create a pinch and rotate recognizer
// these require 2 pointers
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();
var swipe = new Hammer.Swipe();

// we want to detect both the same time
// pinch.recognizeWith(rotate);

// add to the Manager
mc.add([pinch, rotate, swipe]);
mc.get("pinch").set({ enable: true });
mc.get("rotate").set({ enable: true });
mc.get("swipe").set({ enable: true });


mc.on("pinch", function(ev) {
    // myElement.textContent += ev.type +" ";
    document.body.style.backgroundColor = "blue";
});

mc.on("rotate", function(ev) {
    // myElement.textContent += ev.type +" ";
    document.body.style.backgroundColor = "yellow";
});

mc.on("swipe", function(ev) {
    // myElement.textContent += ev.type +" ";
    document.body.style.backgroundColor = "purple";
});