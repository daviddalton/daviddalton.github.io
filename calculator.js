function calculate(distance) {
        var hours = document.getElementById("hours").value;
        var minutes = document.getElementById("minutes").value;
        var seconds = document.getElementById("seconds").value;
        var totalSeconds = (hours * 3600) + (minutes * 60) + +seconds;
        var paceInSeconds = totalSeconds/distance;
        var pace = paceInSeconds/60
        document.getElementById("pace_label").innerHTML = "";
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
    var pattNegative = new RegExp("-");
    var pattLetters = new RegExp("[a-zA-Z]+");
    var negHours = pattNegative.test(hours);
    var negMinutes = pattNegative.test(minutes);
    var negSeconds = pattNegative.test(minutes);
    var negDistance = pattNegative.test(distance);
    var lettHours = pattLetters.test(hours);
    var lettMinutes = pattLetters.test(minutes);
    var lettSeconds = pattLetters.test(seconds);
    var lettDistance = pattLetters.test(distance);
    
    if (distance == '' || distance == "0") {
        alert("Distance can not be empty or 0");
    } 
    else if (negDistance == true) {
        alert("Distance can not be negative");
    }

    else if (negHours == true) {
        alert("Hours can not be negative");
    }

    else if (negMinutes == true) {
        alert("Minutes can not be negative");
    }

    else if (negSeconds == true) {
        alert("Seconds can not be negative");

    } 
    else if (lettHours == true) {
        alert("Numbers only please");
    } 

    else if (lettMinutes == true) {
        alert("Numbers only please");
    } 

    else if (lettSeconds == true) {
        alert("Numbers only please");
    } 

    else if (lettDistance == true) {
        alert("Numbers only please");
    }

    else {
        calculate(distance);
    }
}

function Clear() {  
   document.getElementById("distance_box").value= "";
   document.getElementById("minutes").value= "";
   document.getElementById("seconds").value= "";
   document.getElementById("hours").value= "";
   document.getElementById("pace_box").value="";  
   document.getElementById("distance_label").innerHTML="miles";
   document.getElementById("minutes_label").innerHTML="minutes";
   document.getElementById("secondsLabel").innerHTML="seconds";
   document.getElementById("hours_label").innerHTML="hours";
   document.getElementById("pace_label").innerHTML="pace";

   document.getElementById('clear').disabled = true;
}

function buttonColor() {
    document.getElementById('clear').disabled = false;
}
































