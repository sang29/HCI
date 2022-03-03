// <!-- // Create a Paper.js Path to draw a line into it:
//             var path = new Path();
//             // Give the stroke a color
//             path.strokeColor = 'black';
//             var start = new Point(100, 100);
//             // Move to start and draw a line from there
//             path.moveTo(start);
//             // Note the plus operator on Point objects.
//             // PaperScript does that for us, and much more!
//             path.lineTo(start + [ 100, -50 ]); -->
var websocket = new WebSocket("ws://localhost:8003");
websocket.onmessage = function(event) {
    console.log(event);
    //If you manage to send the event as a string "<x> <y>"
    //you can then ...
    var data = "130 120";
    var tokens = data.split(" ");
    var xStr = tokens[0];
    var yStr = tokens[1];
    var x = Number(xStr);
    var y = Number(yStr);
    //how do you add this point to the path
};

var myPath;

function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
}

function onMouseDrag(event) {
    myPath.add(event.point);
    websocket.send("The mouse has been moved.");
}

function onMouseUp(event) {
    var myCircle = new Path.Circle({
        center: event.point,
        radius: 10
    });
    myCircle.strokeColor = 'black';
    myCircle.fillColor = 'white';
}