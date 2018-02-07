var clear = document.getElementById("clear");
var canvas = document.getElementById("slate");

var canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = "#FF0000";

var requestID;

var clearCallback = function(e){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
};

var canvasCallback = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);

    var run = function(){
	clearCallback();
	canvasContext.beginPath();
	if (((canvas.width+canvas.height/100)+requestID) == canvas.width+canvas.height/2){
	    console.log(((canvas.width+canvas.height)/100)-(1-requestID));
	    canvasContext.arc(canvas.width/2, canvas.height/2, ((canvas.width+canvas.height)/100)-(1-requestID), 0, 2*Math.PI);
	}
	else{
	    canvasContext.arc(canvas.width/2, canvas.height/2, ((canvas.width+canvas.height)/100)+requestID, 0, 2*Math.PI);
	}
	canvasContext.fill();
	requestID = window.requestAnimationFrame(run);
	console.log("ran " + requestID);
    };
    window.requestAnimationFrame(run);
};

clear.addEventListener("click", clearCallback);
canvas.addEventListener("click", canvasCallback);
