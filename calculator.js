function calculate() {
        var distance = document.getElementById("distance_box").value;
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

function checkDistance(distance) {
    if (field.value == '') {
        alert("Distance field is empty");
    }
}

function checkTime(hours, minutes, seconds) {
    if (field.value < '0') {
        alert("The time can not be negative");
    }
}
