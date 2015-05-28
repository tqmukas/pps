(function (win, doc) {

var canvas, width, height, depth;
var sub = .06;
var off = .75;
var on = 1 - off;
var peakW = .2;
var peakH = .15;

function init() {
  _width = doc.getElementById('width');
  _height = doc.getElementById('height');
  _depth = doc.getElementById('depth');
  canvas = doc.getElementById('result-canvas');
  
  _width.addEventListener('input', handleInputChange);
  _height.addEventListener('input', handleInputChange);
  _depth.addEventListener('input', handleInputChange);
}

function handleInputChange() {
  var max;
  var w = _width.value >> 0;
  var h = _height.value >> 0;
  var d = _depth.value >> 0;

  clearCanvas(w, h, d);

  if (w && h && d) {
    max = Math.max(w, h, d);

    if (max == w) {
      h = 120 * h / w;
      d = 120 * d / w;
      w = 120;
    } else if (max === h) {
      w = 120 * w / h;
      d = 120 * d / h;
      h = 120;
    } else if (max === d) {
      h = 120 * h / d;
      w = 120 * w / d;
      d = 120;
    }

    clearCanvas(w, h, d);
    drawBox(w, h, d);
  }
}

function clearCanvas(w, h, d) {
  canvas.width = 4 * d + w + d * 2 * peakH + 2;
  canvas.height = 2 * h + 3 * d + 2;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function drawBox(w, h, d) {
  var con = canvas.getContext('2d');
  var startX = d * 2 + d * peakH + 1;
  var startY = d + 1;
  var add;

  con.strokeStyle = "#000000";
  con.globalAlpha = 1;
  con.lineWidth = 1;
  con.setLineDash([8, 4, 8, 4]);

  con.strokeRect(startX, startY, w, h);
  con.strokeRect(startX, startY + h + d, w, h);

  con.beginPath();
  con.moveTo(startX, startY + h);
  con.lineTo(startX, startY + h + d);
  con.moveTo(startX + w, startY + h + d);
  con.lineTo(startX + w, startY + h);

  con.moveTo(startX, startY + h + d + h);
  con.lineTo(startX, startY + h + d + h + d);
  con.moveTo(startX + w, startY + h + d + h + d);
  con.lineTo(startX + w, startY + h + d + h);

  con.moveTo(startX - d, startY + h + d);
  con.lineTo(startX - d, startY + h + d + h);

  con.moveTo(startX + w + d, startY + h + d);
  con.lineTo(startX + w + d, startY + h + d + h);
  con.stroke();


  con.setLineDash([]);
  con.beginPath();
  
  con.moveTo(startX, startY);
  con.lineTo(startX + w * sub, startY - d * off);
  con.lineTo(startX + w - w * sub, startY - d * off);
  con.lineTo(startX + w, startY);

  con.lineTo(startX + w + d * off, startY + h * sub);
  con.lineTo(startX + w + d * off, startY + h - h * sub);
  con.lineTo(startX + w, startY + h);

  con.lineTo(startX + w + d * off, startY + h);
  con.lineTo(startX + w + d, startY + h + d * on);
  con.lineTo(startX + w + d, startY + h + d);

  con.moveTo(startX + w, startY + h + d);
  con.lineTo(startX + w + d * 2, startY + h + d);
  con.lineTo(startX + w + d * 2, startY + h + d + h * peakW * 2);
  con.lineTo(startX + w + d * 2 + d * peakH, startY + h + d + h * peakW * 2);
  con.lineTo(startX + w + d * 2 + d * peakH, startY + h + d + h * peakW * 3);
  con.lineTo(startX + w + d * 2, startY + h + d + h * peakW * 3);
  con.lineTo(startX + w + d * 2, startY + h + d + h);
  con.lineTo(startX + w, startY + h + d + h);

  con.moveTo(startX + w + d, startY + h + d + h);
  con.lineTo(startX + w + d, startY + h + d + h + d * off);
  con.lineTo(startX + w + d * off, startY + h + d + h + d);
  con.lineTo(startX - d * off, startY + h + d + h + d);
  con.lineTo(startX - d, startY + h + d + h + d * off);
  con.lineTo(startX - d, startY + h + d + h);

  con.moveTo(startX, startY + h + d + h);
  con.lineTo(startX - d * 2, startY + h + d + h);
  con.lineTo(startX - d * 2, startY + h + d + h * peakW * 3);
  con.lineTo(startX - d * 2 - d * peakH, startY + h + d + h * peakW * 3);
  con.lineTo(startX - d * 2 - d * peakH, startY + h + d + h * peakW * 2);
  con.lineTo(startX - d * 2, startY + h + d + h * peakW * 2);
  con.lineTo(startX - d * 2, startY + h + d);
  con.lineTo(startX, startY + h + d);

  con.moveTo(startX - d, startY + h + d);
  con.lineTo(startX - d, startY + h + d * on);
  con.lineTo(startX - d * off, startY + h);
  con.lineTo(startX, startY + h);

  con.lineTo(startX - d * off, startY + h - h * sub);
  con.lineTo(startX - d * off, startY + h * sub);
  con.lineTo(startX, startY);

  con.moveTo(startX - d, startY + h + d + h * peakW * 2);
  con.lineTo(startX - d, startY + h + d + h * peakW * 3);

  con.moveTo(startX + w + d, startY + h + d + h * peakW * 2);
  con.lineTo(startX + w + d, startY + h + d + h * peakW * 3);

  con.stroke();
}

win.onload = init;

})(window, document);