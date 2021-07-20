
// Create time data function
function currentTime() {
    //Declare variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current seconds
    var sec = d.getSeconds();
    var ampm; // Declare empty variable to store AM or PM

    var utchr = d.getUTCHours();

    let base = {
        "Central Standard Time": "CT",
        "Central Daylight Time": "CT",
        "Central Time": "CT",
        "Mountain Standard Time": "MT",
        "Mountain Daylight Time": "MT",
        "Mountain Time": "MT",
        "Pacific Standard Time": "PT",
        "Pacific Daylight Time": "PT",
        "Pacific Time": "PT",
        "Eastern Standard Time": "ET",
        "Eastern Daylight Time": "ET",
        "Eastern Time": "ET",
    }
    var timeDiff = base[d.toTimeString().split('(')[1].split(')')[0]] || "";
    // var adjTimeDiff;
    // var timeZone;
    // var time;

    // Add 0 to single digits for seconds
    sec = sec < 10 ? "0" + sec : sec;
    // Add 0 to single digits for minutes
    min = min < 10 ? "0" + min : min;

    // Determine AM or PM string
    ampm = hr >= 12 ? "PM" : "AM";
    hr = hr > 12 ? hr % 12 : hr;

    // Assemble time format to display
    time = `${hr}:${min}:${sec} ${ampm} ${timeDiff}`;

    // Display current local time and time one on HTML elements
    document.getElementById("clock").innerHTML = time // adding time
}

setInterval(currentTime, 250);