var clear = document.getElementById("clear");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var canvas = document.getElementById("slate");

var canvasContext = canvas.getContext('2d');

var requestID;

//for circle
var size, grow;
//size = 1;
//grow = 1;

//for dvd
var diffX, diffY;

var clearCallback = function(e){
    //console.log("cleared");
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "#b0c4de";
    canvasContext.beginPath();
};

var stopCallback = function(e){
    window.cancelAnimationFrame(requestID);
};

var circleCallback = function(e){
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

var dvdCallback = function(e){
    var x = canvas.width/2;
    var y = canvas.height/2;
    diffX = 1;
    diffY = 1;
    console.log(x);
    console.log(y);
    
    stopCallback();
    
    var run = function(){
	clearCallback();
	canvasContext.beginPath();
	canvasContext.arc(x, y, 10, 0, 2*Math.PI);
	canvasContext.fill();
	if (x <= 0){
	    diffX = 2;
	}
	else if (x >= canvas.width){
	    diffX = -2;
	}
	if (y <= 0){
	    diffY = 2;
	}
	else if (y >= canvas.height){
	    diffY = -2;
	}
	x += diffX;
	y += diffY;
	requestID = window.requestAnimationFrame(run);
	//console.log("ran " + requestID);
    };
    window.requestAnimationFrame(run);
}

clear.addEventListener("click", clearCallback);
stop.addEventListener("click", stopCallback);
circle.addEventListener("click", circleCallback);
dvd.addEventListener("click", dvdCallback);
