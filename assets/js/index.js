var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var eidDate = new Date("10 july 2022");
var currentDate = new Date();

var diff = eidDate.getTime() - currentDate.getTime();

var days = diff / (1000 * 60 * 60 * 24);
var daysInt = Math.floor(days);

var hours = (days - daysInt) * 24;
var hoursInt = Math.floor(hours);

var mins = (hours - hoursInt) * 60;
var minsInt = Math.floor(mins);

document.getElementById("days").innerHTML = daysInt;
document.getElementById("hours").innerHTML = hoursInt;
document.getElementById("mins").innerHTML = minsInt;

var eidDaysHtml = "";
for (var i = 0; i < 3; i++) {
  eidDate.setDate(eidDate.getDate() + i);

  var date = eidDate.getDate();
  var day = daysOfWeek[eidDate.getDay()];
  var month = months[eidDate.getMonth()];
  var year = eidDate.getFullYear();

  eidDaysHtml += "<div class='eid-day'>";
  eidDaysHtml += "<h2>" + (i + 1) + " day of Eid</h2>";
  eidDaysHtml +=
    "<p>On " + day + " " + date + " " + month + " " + year + "</p></div>";
}
document.querySelector(".eid-days").innerHTML = eidDaysHtml;
