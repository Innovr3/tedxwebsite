function event_timer() {
    var eventPosition = new Date(Date.UTC(2016, 07, 26, 03, 30, 00, 00)),
        currentPosition = new Date();
        var BetPosition = eventPosition - currentPosition;
        var seconds = (BetPosition / 1000),
        minutes = seconds / 60,
        hours = minutes / 60,
        days = hours / 24;
	
	seconds = seconds % 60;
	seconds = Math.floor(seconds);

	minutes = minutes % 60;
	minutes = Math.floor(minutes);

	hours = hours % 24;
	hours = Math.floor(hours);
	
	days = Math.floor(days);
	

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	
	if (seconds <= 9) {
		document.getElementById("seconds").innerHTML = "0" + seconds;
	}
	if (minutes <= 9) {
		document.getElementById("minutes").innerHTML = "0" + minutes;
	}
	if (hours <= 9) {
		document.getElementById("hours").innerHTML = "0" + hours;
	}
	if (days <= 9) {
		document.getElementById("days").innerHTML = "0" + days;
	}
	
	if (seconds !== (-1)) {
		setTimeout(event_timer, 1000);
	}
}


window.onload = setTimeout(event_timer, 1000);