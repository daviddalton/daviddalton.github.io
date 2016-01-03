function calculate(distance) {
        var hours = document.getElementById("hours").value;
        var minutes = document.getElementById("minutes").value;
        var seconds = document.getElementById("seconds").value;
        var totalSeconds = (hours * 3600) + (minutes * 60) + +seconds;
        var paceInSeconds = totalSeconds/distance;
        var pace = paceInSeconds/60
        document.getElementById("pace_box").value = (displayMin(pace) + ":" + displaySec(pace));
}

function displayMin(pace) {
	return Math.floor(pace);
}

function displaySec(pace) {
	var decimal = pace - displayMin(pace);
	return pad(Math.round(decimal * 60));
}

function pad(num) {
    var decimal = num+"";

    while (decimal.length < 2) {
    	decimal = "0" + decimal;
    }

    return decimal;
}

function verifyAndCalculate() {
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;
    var distance = document.getElementById("distance_box").value;
    if (distance == '') {
        alert("Distance field is empty");
    } 
        else {
            calculate(distance);
    }
    /*if (distance < "0") {
        alert("Distance can't be negative");
    } 
        else {
            calculate(distance);
    }
    if (hours < "0") {
        alert("Hours can't be negative");
    } 
        else {
            calculate(distance);
    }
    if (minutes < "0") {
        alert("Minutes can't be negative");
    } 
        else {
            calculate(distance);
    }
    if (seconds < "0") {
        alert("Seconds can't be negative");
    } 
        else {
            calculate(distance);
    }
    
}

