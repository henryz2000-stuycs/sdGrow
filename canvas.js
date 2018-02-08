var clear = document.getElementById("clear");
var canvas = document.getElementById("slate");

var canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = "#FF0000";

var requestID, end;

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
	if (requestID == (canvas.width+canvas.height)/4){
	    end = requestID;
	}
	if (requestID >= (canvas.width+canvas.height)/4){
	    console.log(((canvas.width+canvas.height)/100)-(1-requestID));
	    canvasContext.arc(canvas.width/2, canvas.height/2, requestID-(requestID % end), 0, 2*Math.PI);
	}
	else{
	    canvasContext.arc(canvas.width/2, canvas.height/2, requestID, 0, 2*Math.PI);
	}
	canvasContext.fill();
	requestID = window.requestAnimationFrame(run);
	//console.log("ran " + requestID);
    };
    window.requestAnimationFrame(run);
};

clear.addEventListener("click", clearCallback);
canvas.addEventListener("click", canvasCallback);
