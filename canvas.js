var clear = document.getElementById("clear");
var stop = document.getElementById("stop");
var canvas = document.getElementById("slate");

var canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = "#FF0000";

var requestID, size, grow;
//size = 1;
//grow = 1;

var clearCallback = function(e){
    //console.log("cleared");
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
};

var stopCallback = function(e){
    window.cancelAnimationFrame(requestID);
};

var canvasCallback = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);

    size = 1;
    grow = 1;
    stopCallback();
    
    var run = function(){
	clearCallback();
	canvasContext.beginPath();
	canvasContext.arc(canvas.width/2, canvas.height/2, size, 0, 2*Math.PI);
	canvasContext.fill();
	if (size == (canvas.width+canvas.height)/4){
	    grow = 0;
	}
	else if (size == 0){
	    grow = 1;
	}
	if (grow == 1){
	    size++;
	}
	else{
	    size--;
	}
	requestID = window.requestAnimationFrame(run);
	//console.log("ran " + requestID);
    };
    window.requestAnimationFrame(run);
};

clear.addEventListener("click", clearCallback);
stop.addEventListener("click", stopCallback);
canvas.addEventListener("click", canvasCallback);
