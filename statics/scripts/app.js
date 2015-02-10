(function (win, doc) {

var canvas;

function init() {
  canvas = doc.getElementById('result-canvas');
  draw();
}

function draw() {
  var con = canvas.getContext('2d');
  con.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  con.moveTo(110,75);
  con.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
  con.moveTo(65,65);
  con.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  con.moveTo(95,65);
  con.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  con.stroke();
}

win.onload = init;

})(window, document);