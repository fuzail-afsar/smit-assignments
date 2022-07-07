/**
 * CHAPTER 1
 */

// QUESTION 1
// alert("Hello world");

// QUESTION 2
// alert("Error! Please enter a valid password.");

// QUESTION 3
// alert("Welcome to JS Land... \n Happy Coding!");

// QUESTION 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

/**
 * CHAPTER 2
 */

// QUESTION 1
// var username;

// QUESTION 2
// var myName = "Fuzail Afsar";

// QUESTION 3
// var message;
// message = "Hello World";
// alert(message);

// QUESTION 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// QUESTION 5
// var pizzas = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizzas);

// QUESTION 6
// var email;
// email = "fuzailafsar92@gmail.com";
// alert("My email address is " + email);

// QUESTION 7
// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// QUESTION 8
// var para = document.createElement("p");
// para.innerHTML = "Yah! I can write HTML content through JavaScript";
// document.getElementsByTagName("body")[0].append(para);

// QUESTION 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern);

/**
 * CHAPTER 3
 */

// QUESTION 1
// var age;
// age = 22;
// alert("I am " + age + " years old");

// QUESTION 2
// var visitedCount = +localStorage.getItem("visited") || 0;
// localStorage.setItem("visited", ++visitedCount);
// alert("You have visited this site " + visitedCount + " times");

// QUESTION 3
// var birthYear;
// birthYear = 1999;
// document.write(
//   "My birth year is " +
//     birthYear +
//     "<br /> Data type of my declared variable is " +
//     typeof birthYear
// );

// QUESTION 4
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;

// document.write(
//   "<b>" +
//     visitorName +
//     "</b> ordered <b>" +
//     quantity +
//     " " +
//     productTitle +
//     "</b>(s) " +
//     "on XYZ Clothing store"
// );

/**
 * CHAPTER 4
 */

// QUESTION 1
// var v1, v2, v3;

// QUESTION 2
// var legalVariable1;
// var LegalVariable2;
// var legal_variable3;
// var _legal_variable_4;
// var $legalVariable5;

// var var;
// var 2illegalVariable;
// var @illegalVariable3;
// var illegal@Variable4;
// var illegalVariable();

// QUESTION 3

// a)
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br>");

// b)
// document.write(
//   "Variable names can only contain, numbers, $ and _. For example: $my_1stVariable"
// );
// document.write("<br>");

// c)
// document.write(
//   "Variables must begin with a letter, $ or _ . For exmaple: $name, _name or name"
// );
// document.write("<br>");

// d)
// document.write("Variable names are case sensitive");
// document.write("<br>");

// e)
// document.write("Variable names should not be JS keywords");

/**
 * CHAPTER 5
 */

// QUESTION 1
// var num1 = 3;
// var num2 = 5;
// var add = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + add);

// QUESTION 2
// var num3 = 3;
// var num4 = 5;
// var subtraction = num3 - num4;
// document.write(
//   "Subtraction of " + num3 + " and " + num4 + " is " + subtraction
// );

// var num5 = 3;
// var num6 = 5;
// var multiplication = num5 * num6;
// document.write(
//   "Multiplication of " + num5 + " and " + num6 + " is " + multiplication
// );

// var num7 = 3;
// var num8 = 5;
// var division = num7 / num8;
// document.write("division of " + num7 + " and " + num8 + " is " + division);

// QUESTION 3
// var num;
// document.write("Value after variable declaration is: " + num);
// document.write("<br />");

// num = 5;
// document.write("Initial value: " + num);
// document.write("<br />");

// document.write("Value after increment is: " + ++num);
// document.write("<br />");

// num += 7;
// document.write("Value after addition is: " + num);
// document.write("<br />");

// document.write("Value after decrement is: " + --num);
// document.write("<br />");

// document.write("The remainder is: " + (12 % 3));

// QUESTION 4
// var ticketPrice = 600;
// var noOfTicketBuy = 5;
// document.write(
//   "Total cost to buy " +
//     noOfTicketBuy +
//     " tickets to a movie is " +
//     ticketPrice * noOfTicketBuy +
//     "PKR"
// );

// QUESTION 5
// var table = 4;
// var count = 0;
// document.write("Table of " + table);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);
// document.write("<br />");
// document.write(table + "x" + ++count + "=" + table * count);

// QUESTION 6
// var celsiusUnit = "°C";
// var fahrenheitUnit = "°F";
// var celsiusTemperature = 25;
// var celsiusToFahrenheit = (celsiusTemperature * 9) / 5 + 32;
// document.write(
//   celsiusTemperature +
//     celsiusUnit +
//     " is " +
//     celsiusToFahrenheit +
//     fahrenheitUnit
// );
// document.write("<br />");
// var fahrenheitTemperature = 70;
// var fahrenheitToCelsius = ((fahrenheitTemperature - 32) * 5) / 9;
// document.write(
//   fahrenheitTemperature +
//     fahrenheitUnit +
//     " is " +
//     fahrenheitToCelsius +
//     celsiusUnit
// );

// QUESTION 7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var total =
//   priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

// document.write("Price of item 1 is " + priceItem1 + "<br />");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br />");
// document.write("Price of item 2 is " + priceItem2 + "<br />");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br />");
// document.write("Shipping Charges " + shippingCharges + "<br /><br />");
// document.write("Total cost of your order is " + total);

// QUESTION 8
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total marks: " + totalMarks + "</p>");
// document.write("<p>Marks obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage + "%</p>");

// QUESTION 9
// var usDollars = 10;
// var saudiRiyals = 25;
// var usDollarRate = 104.8;
// var saudiRiyalRate = 28;
// var total = usDollars * usDollarRate + saudiRiyals * saudiRiyalRate;

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + total);

// QUESTION 10
// var num9 = 10;
// num9 = ((num9 + 5) * 10) / 2;
// console.log(num9);

// QUESTION 11
// var currentYear = 2022;
// var birthYear = 1999;
// var age = currentYear - birthYear;

// document.write("<h1>Age Calculator</h1>");
// document.write("Your Age is: " + age);

// QUESTION 12
// var circleRadius = 20;
// var PI = 3.142;
// var circleCircumference = 2 * PI * circleRadius;
// var circleArea = PI * circleRadius ** 2;

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of circle:" + circleRadius + "<br />");
// document.write("The circumference is:" + circleCircumference + "<br />");
// document.write("The area is:" + circleArea);

// QUESTION 13
// var snack = "lays";
// var currentAge = 22;
// var estimatedMaxAge = 50;
// var noOfSnacksPerDay = 4;
// var estimatedSnacksAtMaxAge =
//   (estimatedMaxAge - currentAge) * 365 * noOfSnacksPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack:" + snack);
// document.write("<br />");
// document.write("Current Age:" + currentAge);
// document.write("<br />");
// document.write("Estimated Maximum Age:" + estimatedMaxAge);
// document.write("<br />");
// document.write("Amount of snacks per day:" + noOfSnacksPerDay);
// document.write("<br />");
// document.write(
//   "You will need " +
//     estimatedSnacksAtMaxAge +
//     " chocolate chip to last you until the ripe old age of " +
//     estimatedMaxAge
// );

/**
 * CHAPTER 6-9
 */

// QUESTION 1
// var a = 10;
// document.write("Result:");
// document.write("<br />");
// document.write("The value of a is: " + a);
// document.write("<br />");
// document.write("......................");
// document.write("<br />");
// document.write("The value of ++a is: " + ++a);
// document.write("<br />");
// document.write("Now the value of a is: " + a);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of a++ is: " + a++);
// document.write("<br />");
// document.write("Now the value of a is: " + a);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of --a is: " + --a);
// document.write("<br />");
// document.write("Now the value of a is: " + a);
// document.write("<br />");
// document.write("<br />");
// document.write("The value of a is: " + a--);
// document.write("<br />");
// document.write("Now the value of a is: " + a);

// QUESTION 2
// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;
// var output = "a is " + a;
// output += "<br />";
// output += "b is " + b;
// output += "<br />";
// output += "result is " + result;
// document.write(output);

// QUESTION 3
// var userName = prompt("Enter your name");
// document.write("<h1>Hello " + userName + "</h1>");

// QUESTION 5
// var table = +prompt("Enter a number", 5);
// var count = 0;
// var output = table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// output += table + " x " + ++count + " = " + table * count + "<br />";
// document.write(output);

// QUESTION 6
// var subject1 = prompt("Enter first subject name");
// var subject2 = prompt("Enter second subject name");
// var subject3 = prompt("Enter third subject name");

// var totalMarks = 100;

// var marksSubject1 = +prompt("Enter first subject marks");
// var marksSubject2 = +prompt("Enter second subject marks");
// var marksSubject3 = +prompt("Enter third subject marks");

// var percentageSubject1 = (marksSubject1 / totalMarks) * 100;
// var percentageSubject2 = (marksSubject2 / totalMarks) * 100;
// var percentageSubject3 = (marksSubject3 / totalMarks) * 100;

// var totalPercentage =
//   percentageSubject1 + percentageSubject2 + percentageSubject3;

// var totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3;

// var output = "<table>";
// output += "<thead><tr>";
// output += "<th>Subject</th>";
// output += "<th>Total Marks</th>";
// output += "<th>Obtained Marks</th>";
// output += "<th>Percentage</th>";
// output += "</tr></thead>";
// output += "<tbody>";
// output += "<tr>";
// output += "<td>" + subject1 + "</td>";
// output += "<td>" + totalMarks + "</td>";
// output += "<td>" + marksSubject1 + "</td>";
// output += "<td>" + percentageSubject1 + "%</td>";
// output += "</tr>";
// output += "<tr>";
// output += "<td>" + subject2 + "</td>";
// output += "<td>" + totalMarks + "</td>";
// output += "<td>" + marksSubject2 + "</td>";
// output += "<td>" + percentageSubject2 + "%</td>";
// output += "</tr>";
// output += "<tr>";
// output += "<td>" + subject3 + "</td>";
// output += "<td>" + totalMarks + "</td>";
// output += "<td>" + marksSubject3 + "</td>";
// output += "<td>" + percentageSubject3 + "%</td>";
// output += "</tr>";
// output += "</tbody>";
// output += "<tfoot><tr>";
// output += "<th></th>";
// output += "<th>" + totalMarks * 3 + "</th>";
// output += "<th>" + totalMarksObtained + "</th>";
// output += "<th>" + totalPercentage + "%</th>";
// output += "</tr></tfoot>";
// output += "</table>";

// document.write(output);

/**
 * CHAPTERS 9-11
 */

// QUESTION 1
// var city = prompt("Enter city name");
// if (city === "Karachi" || city === "karachi") {
//   alert("Welcome to city of lights");
// }

// QUESTION 2
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//   alert("Good Morning Sir");
// } else if (gender === "female") {
//   alert("Good Morning Ma’am");
// }

// QUESTION 3
// var color = prompt("Enter trffic signal color");
// if (color === "Red" || color === "red") {
//   alert("Must stop");
// } else if (color === "Yellow" || color === "yellow") {
//   alert("Ready to move");
// } else if (color === "Green" || color === "green") {
//   alert("Move now");
// } else {
//   alert("Must stop");
// }

// QUESTION 4
// var fuel = +prompt("Enter your car fuel in litres");
// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }

// QUESTION 6
// var obtainedMarks = +prompt("Enter marks obtained in three subjects");
// var totalMarks = +prompt("Totals marks of three subjects");
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade = "";
// var remarks = "";
// var output = "";

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellant";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else if (percentage < 60) {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// output += "<h1>Marks Sheet</h1>";
// output += "Totals marks: " + totalMarks + "<br />";
// output += "Marks obtained: " + obtainedMarks + "<br />";
// output += "Percentage: " + percentage + "%<br />";
// output += "Grade: " + grade + "<br />";
// output += "Remarks: " + remarks;

// document.write(output);

// QUESTION 7
// var secretNumber = Math.ceil(Math.random() * 10);
// var guessNumber = +prompt("Enter guessed secret number from (1-10)");
// if (secretNumber === guessNumber) {
//   alert("Bingo! Correct answer");
// } else if (secretNumber === ++guessNumber) {
//   alert("Close enough to the correct answer");
// }

// QUESTION 8
// var num10 = +prompt("Enter a number");
// var divisibleNumber = 3;
// if (num10 % divisibleNumber === 0) {
//   alert(num10 + " is divisible by " + divisibleNumber);
// } else {
//   alert(num10 + " is not divisible by " + divisibleNumber);
// }

// QUESTION 9
// var num11 = +prompt("Enter a number");
// var divisibleNumber = 2;
// if (num11 % divisibleNumber === 0) {
//   alert(num11 + " is an even number");
// } else {
//   alert(num11 + " is an odd number");
// }

// QUESTION 10
// var temperature = +prompt("Enter temperature");
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// }

// QUESTION 11
// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operator = prompt("Enter operator (+, -, *, /, %)");
// var result;

// if (operator === "+") {
//   result = firstNumber + secondNumber;
// } else if (operator === "-") {
//   result = firstNumber - secondNumber;
// } else if (operator === "*") {
//   result = firstNumber * secondNumber;
// } else if (operator === "/") {
//   result = firstNumber / secondNumber;
// } else if (operator === "%") {
//   result = (firstNumber / secondNumber) * 100;
// }
// alert(firstNumber + " " + operator + " " + secondNumber + " = " + result);

/**
 * CHAPTERS 12-13
 */

// QUESTION 1
// var input = prompt("Enter any character");
// var asciiCode = input.charCodeAt();
// var output = "";
// if (asciiCode <= 57 && asciiCode >= 48) {
//   output = input + " is a number";
// } else if (asciiCode <= 90 && asciiCode >= 65) {
//   output = input + " is an uppercase letter";
// } else if (asciiCode <= 122 && asciiCode >= 97) {
//   output = input + " is a lowercase letter";
// } else {
//   output = input + " is a other character";
// }
// alert(output);

// QUESTION 2
// var integer1 = +prompt("Enter first integer number");
// var integer2 = +prompt("Enter second integer number");
// var output = "";
// if (!integer1 || !integer2) {
//   output = "Enter integers only";
// } else if (integer1 > integer2) {
//   output = integer1 + " is greater.";
// } else if (integer1 < integer2) {
//   output = integer2 + " is greater.";
// } else if (integer1 === integer2) {
//   output = "Both integers are equal.";
// } else {
//   output = "Wrong input.";
// }
// alert(output);

// QUESTION 3
// var num12 = +prompt("Enter +ve, -ve or zero number");
// if (num12 > 0) {
//   alert(num12 + " is a positive number");
// } else if (num12 < 0) {
//   alert(num12 + " is a negative number");
// } else if (num12 === 0) {
//   alert(num12 + " is a zero");
// } else {
//   alert("Only +ve, -ve or zero numbers are allowed");
// }

// QUESTION 4
// var character = prompt("Enter a character");

// if (
//   character === "a" ||
//   character === "e" ||
//   character === "i" ||
//   character === "o" ||
//   character === "u"
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// QUESTION 5
// var password = "abc123";
// var userPassword = prompt("Enter your password");

// if (!userPassword) {
//   alert("Please enter your password");
// } else if (password === userPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

// QUESTION 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// QUESTION 7
// var time = +prompt("Enter time in 24 hours clock format (like: 1900 = 7pm)");
// if (time >= 0 && time < 1200) {
//   alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//   alert("Good Night!");
// }

/**
 * CHAPTERS 14-16
 */

// QUESTION 1
// var students = [];

// QUESTION 2
// var students2 = new Array();

// QUESTION 3
// var sringsArray = ["abc", "def", "ghi"];

// QUESTION 4
// var numbersArray = [1, 2, 3, 5];

// QUESTION 5
// var booleanArray = [true, false];

// QUESTION 6
// var mixedArray = ["abc", 123, true];

// QUESTION 7
// var qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil",
//   "PhD",
// ];
// var count = 0;
// var output = "<h3>Qualifications: </h3>";
// output += "<h3>" + ++count + ") " + qualifications[0] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[1] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[2] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[3] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[4] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[5] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[6] + "</h3>";
// output += "<h3>" + ++count + ") " + qualifications[7] + "</h3>";

// document.write(output);

// QUESTION 8
// var studentNames = [
//   prompt("Enter first student name"),
//   prompt("Enter second student name"),
//   prompt("Enter third student name"),
// ];

// var studentScores = [
//   +prompt("Enter first student score"),
//   +prompt("Enter second student score"),
//   +prompt("Enter third student score"),
// ];

// var totalMarks = 500;
// var output =
//   "Score of " +
//   studentNames[0] +
//   " is " +
//   studentScores[0] +
//   ". Percentage: " +
//   (studentScores[0] / totalMarks) * 100 +
//   "% \n";
// output +=
//   "Score of " +
//   studentNames[1] +
//   " is " +
//   studentScores[1] +
//   ". Percentage: " +
//   (studentScores[1] / totalMarks) * 100 +
//   "% \n";
// output +=
//   "Score of " +
//   studentNames[2] +
//   " is " +
//   studentScores[2] +
//   ". Percentage: " +
//   (studentScores[2] / totalMarks) * 100 +
//   "%";
// alert(output);

// QUESTION 9
// var colors = ["red", "green", "blue"];
// document.write(colors);

// colors.unshift(prompt("Enter color name you wants to add to the beginning"));
// document.write("<br />" + colors);

// colors.push(prompt("Enter color name you wants to add to the end"));
// document.write("<br />" + colors);

// colors.unshift("brown", "black");
// document.write("<br />" + colors);

// colors.shift();
// document.write("<br />" + colors);

// colors.pop();
// document.write("<br />" + colors);

// colors.splice(
//   +prompt("Enter index/position where you wants to add color"),
//   0,
//   prompt("Enter color name you wants to add")
// );
// document.write("<br />" + colors);

// colors.splice(
//   +prompt("Enter index/position at which where you wants to delete color"),
//   +prompt("Enter length for how many colors you wants to delete")
// );
// document.write("<br />" + colors);

// QUESTION 10
// var studentsScore = [320, 230, 480, 120];
// console.log(studentsScore);

// studentsScore.sort();
// console.log(studentsScore);

// QUESTION 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selecteCities = cities.slice(0, 3);
// console.log("cities", cities);
// console.log("selecteCities", selecteCities);

// QUESTION 12
// var arr = ["This", "is", "my", "cat"];
// console.log("array", arr);

// arr = arr.join(" ");
// console.log("string", arr);

// QUESTION 13
// var fifo = [];
// fifo.push("fifo");
// console.log(fifo);
// fifo.push("-");
// fifo.push("First");
// fifo.push("In");
// fifo.push("First");
// fifo.push("Out");
// console.log(fifo);

// fifo.shift();
// console.log(fifo);
// fifo.shift();
// fifo.shift();
// fifo.shift();
// fifo.shift();
// fifo.shift();
// console.log(fifo);

// QUESTION 14
// var lifo = [];
// lifo.push("lifo");
// console.log(lifo);
// lifo.push("-");
// lifo.push("Last");
// lifo.push("In");
// lifo.push("First");
// lifo.push("Out");
// console.log(lifo);

// lifo.pop();
// console.log(lifo);
// lifo.pop();
// lifo.pop();
// lifo.pop();
// lifo.pop();
// lifo.pop();
// console.log(lifo);

// QUESTION 15
// var phoneManufacurers = [
//   "Apple",
//   "Samsung",
//   "Motorola",
//   "Nokia",
//   "Sony",
//   "Haier",
// ];

// var dropdownOutput = "<select>";
// dropdownOutput += "<option>" + phoneManufacurers[0] + "</option>";
// dropdownOutput += "<option>" + phoneManufacurers[1] + "</option>";
// dropdownOutput += "<option>" + phoneManufacurers[2] + "</option>";
// dropdownOutput += "<option>" + phoneManufacurers[3] + "</option>";
// dropdownOutput += "<option>" + phoneManufacurers[4] + "</option>";
// dropdownOutput += "<option>" + phoneManufacurers[5] + "</option>";
// dropdownOutput += "</select>";
// document.write(dropdownOutput);

/**
 * CHAPTERS 17-20
 */

// QUESTION 1
// var multidimensionalArray = [[]];

// QUESTION 2
// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// QUESTION 3
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// QUESTION 4
// var tableNo = +prompt("Enter a number to show its multiplication table");
// var tableLength = +prompt("Enter length of multiplication table");
// var table = "Multiplication table of " + tableNo + "\n";
// table += "Length " + tableLength + "\n";
// for (var i = 1; i <= tableLength; i++) {
//   table += tableNo + " x " + i + " = " + tableNo * i + "\n";
// }
// console.log(table);

// QUESTION 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// QUESTION 6

// a
// var countingHtml = "<h1>Counting:</h1>";
// for (var i = 1, countLength = 15; i <= countLength; i++) {
//   countingHtml += i;
//   if (i !== countLength) countingHtml += ", ";
// }
// document.write(countingHtml);

// b
// var reverseCountingHtml = "<h1>Reverse Counting:</h1>";
// for (
//   var startIteration = 10, endIteration = 1;
//   startIteration >= endIteration;
//   startIteration--
// ) {
//   reverseCountingHtml += startIteration;
//   if (startIteration !== endIteration) reverseCountingHtml += ", ";
// }
// document.write(reverseCountingHtml);

// c
// var even = "<h1>Even:</h1>";
// for (var i = 0, length = 20; i <= length; i++) {
//   if (i % 2 !== 0) continue;
//   even += i;
//   if (i !== length) even += ", ";
// }
// document.write(even);

// d
// var odd = "<h1>Odd:</h1>";
// for (var i = 0, length = 20; i <= length; i++) {
//   if (i % 2 === 0) continue;
//   odd += i + ", ";
// }
// document.write(odd);

// e
// var series = "<h1>Series:</h1>";
// for (var i = 1, length = 20; i <= length; i++) {
//   if (i % 2 !== 0) continue;
//   series += i + "K, ";
// }
// document.write(series);

// QUESTION 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
// );
// var isSearched = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === searchItem) {
//     isSearched = true;
//     break;
//   }
// }
// if (isSearched) {
//   alert(searchItem + " is available at index " + i + " in our bakery");
// } else {
//   alert("We are sorry. " + searchItem + " is not available in our bakery");
// }

// QUESTION 8
// var A = [24, 53, 78, 91, 12];
// var largestNo = A[0];
// for (var i = 0; i < A.length; i++) {
//   if (A[i] > largestNo) largestNo = A[i];
// }
// console.log("Array items: " + A);
// console.log("The Largest number is: " + largestNo);

// QUESTION 9
// var A = [24, 53, 78, 91, 12];
// var smallestNo = A[0];
// for (var i = 0; i < A.length; i++) {
//   if (A[i] < smallestNo) smallestNo = A[i];
// }
// console.log("Array items: " + A);
// console.log("The Smallest number is: " + smallestNo);

// QUESTION 10
// for (var i = 1; i <= 100; ) {
//   if (i === 1) {
//     i += 4;
//     continue;
//   }
//   console.log(i);
//   i += 5;
// }

/**
 * CHAPTERS 21-25
 */

// QUESTION 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);

// QUESTION 2
// var favoritePhoneModel = prompt("Enter your favorite mobile phone model");
// alert(
//   "My favorite phone is: " +
//     favoritePhoneModel +
//     "\nLength of string: " +
//     favoritePhoneModel.length
// );

// QUESTION 3
// var word = "Pakistani";
// document.write("string: " + word + "<br />Index of 'n': " + word.indexOf("n"));

// QUESTION 4
// var word = "Hello World";
// document.write(
//   "string: " + word + "<br />Index of 'l': " + word.lastIndexOf("l")
// );

// QUESTION 5
// var word = "Pakistani";
// document.write(
//   "string: " + word + "<br />Character at index 3: " + word.charAt(3)
// );

// QUESTION 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);

// alert("Welcome ".concat(fullName));

// QUESTION 7
// var city = "Hyderabad";
// var replaceCity = "Islam" + city.slice(5);

// document.write("City: " + city + "<br/>" + "After replacement: " + replaceCity);

// QUESTION 8
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = "";

// for (var i = 0; i < message.length; i++) {
//   if (message.slice(i, i + 3) === "and") {
//     replacedMessage += "&";
//     i += 2;
//   } else {
//     replacedMessage += message[i];
//   }
// }
// document.write(
//   "Message: " + message + "<br/>" + "Replaced Message: " + replacedMessage
// );

// QUESTION 9
// var str = "472";
// var num = 0;

// for (var i = 0; i < str.length; i++) {
//   num = num * 10 + str[i].charCodeAt() - 48;
// }
// document.write(
//   "Value: " +
//     str +
//     "<br/>Type: " +
//     typeof str +
//     "<br/>Value: " +
//     str +
//     "<br/>Type: " +
//     typeof num
// );

// QUESTION 10
// var input = prompt("Enter a sentence or word", "peanuts");
// var output = "";
// for (var i = 0; i < input.length; i++) {
//   var charCode = input[i].charCodeAt();
//   if (charCode >= 97 && charCode <= 122) {
//     output += String.fromCharCode(charCode - 32);
//   } else {
//     output += input[i];
//   }
// }

// document.write("User input: " + input + "<br/>Upper case: " + output);

// QUESTION 11
// var input = prompt("Enter a sentence or word", "peanuts");
// var output = "";
// for (var i = 0; i < input.length; i++) {
//   if (input[i - 1] === " " || i === 0) {
//     var charCode = input[i].charCodeAt();
//     if (charCode >= 97 && charCode <= 122) {
//       output += String.fromCharCode(charCode - 32);
//     } else {
//       output += input[i];
//     }
//   } else {
//     output += input[i];
//   }
// }
// document.write("User input: " + input + "<br/>Upper case: " + output);

// QUESTION 12
// var num = 35.36;
// var string = String(num);
// document.write("Number: " + num + "<br/>Result: " + string);

// QUESTION 13
// var specialCharacter = ["[", "@", ".", ",", "!", "]"];
// var userName = prompt("Enter a username");
// var isValidUserName = true;

// for (var i = 0; i < userName.length; i++) {
//   if (specialCharacter.indexOf(userName[i]) !== -1) {
//     isValidUserName = false;
//     alert("Enter a valid user name");
//     break;
//   }
// }

// QUESTION 14
// var userSearch = prompt(
//   "Welcome to our bakery. What do you want to order sir/ma'am?"
// );
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var isSearched = false;
// var serachItem = userSearch.toLowerCase();

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === serachItem) {
//     isSearched = true;
//     alert(A[i] + " is available at index " + i + " in our bakery");
//     break;
//   }
// }

// if (!isSearched) {
//   alert("We are sorry. " + userSearch + " is not available in our bakery");
// }

// QUESTION 15
// var userPassword = prompt("Enter your password");
// var userPasswordLength = userPassword.length;

// if (userPasswordLength >= 6) {
//   for (var i = 0; i < userPasswordLength; i++) {
//     var charCode = userPassword[i].charCodeAt();
//     if (i === 0 && charCode >= 48 && charCode <= 57) {
//       alert("Password can not begin with a number");
//       break;
//     }
//     if (
//       charCode < 48 ||
//       (charCode < 65 && charCode > 57) ||
//       (charCode < 97 && charCode > 90) ||
//       charCode > 122
//     ) {
//       alert("Password only contain alphabets and numbers");
//       break;
//     }
//   }
// } else {
//   alert("Password should be at least 6 characters long");
// }

// QUESTION 16
// var university = "University of Karachi";
// var html = "";
// university.split("");

// for (var i = 0; i < university.length; i++) {
//   html += university[i] + "<br/>";
// }
// document.write(html);

// QUESTION 17
// var userInput = prompt("Enter a word", "Pakistan");
// document.write(
//   "User input: " +
//     userInput +
//     "<br/>Last character of input: " +
//     userInput[userInput.length - 1]
// );

/**
 * CHAPTERS 26-30
 */

// QUESTION 1
// var userNumber = +prompt("Enter a positive number");
// if (userNumber > 0) {
//   var html = "Number:" + userNumber;
//   html += "<br/>Round off value: " + Math.round(userNumber);
//   html += "<br/>Floor value: " + Math.floor(userNumber);
//   html += "<br/>Ceil value: " + Math.ceil(userNumber);
//   document.write(html);
// } else {
//   alert("Enter positive number");
// }

// QUESTION 2
// var userNumber = +prompt("Enter a negative number");
// if (userNumber < 0) {
//   var html = "Number:" + userNumber;
//   html += "<br/>Round off value: " + Math.round(userNumber);
//   html += "<br/>Floor value: " + Math.floor(userNumber);
//   html += "<br/>Ceil value: " + Math.ceil(userNumber);
//   document.write(html);
// } else {
//   alert("Enter negative number");
// }

// QUESTION 3
// var userNumber = +prompt("Enter a number");
// document.write(
//   "The absolute value of " + userNumber + " is " + Math.abs(userNumber)
// );

// QUESTION 4
// var diceRandomNumbers = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceRandomNumbers);

// QUESTION 5
// var coinToss = Math.floor(Math.random() * 2) + 1;
// var tossResult = "Tails";
// if (coinToss === 2) tossResult = "Heads";
// document.write(coinToss + "<br/>Random coin value: " + tossResult);

// QUESTION 6
// var randomNumbers = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumbers);

// QUESTION 7
// var userWeight = prompt("Enter your weight in kilograms");
// userWeight = Math.abs(parseFloat(userWeight));

// if (userWeight !== NaN) {
//   document.write("The weight of user is " + userWeight + " kilograms");
// }

// QUESTION 8
// var userNumber = parseFloat(prompt("Enter a number between 1 and 10"));
// if (userNumber !== NaN) {
//   if (userNumber > 0 && userNumber < 11) {
//     var secretNumber = Math.floor(Math.random() * 10 + 1);
//     if (secretNumber === userNumber) {
//       alert("Congratulations! you won");
//     } else {
//       alert("Sorry! you loss");
//     }
//   } else {
//     alert("Enter a number between 1 and 10");
//   }
// } else {
//   alert("Enter a valid number");
// }

/**
 * CHAPTERS 31-34
 */

// QUESTION 1
// document.write(new Date());

// QUESTION 2
// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// alert("Current month: " + months[new Date().getMonth()]);

// QUESTION 3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// alert("Today is " + days[new Date().getDay()]);

// QUESTION 4
// var day = new Date().getDay();
// if (day === 0 || day === 6) {
//   alert("It's fun day");
// } else {
//   alert("It's working day");
// }

// QUESTION 5
// if (new Date().getDate() < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// QUESTION 6
// var date = new Date();
// var milliSeconds = date.getTime();

// document.write("Current Date: " + date + "<br/>");
// document.write(
//   "Elapsed milliseconds since January 1, 1970 : " + milliSeconds + "<br/>"
// );
// document.write(
//   "Elapsed minutes since January 1, 1970 : " + milliSeconds / (1000 * 60)
// );

// QUESTION 7
// if (new Date().getHours() < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// QUESTION 8
// var laterDate = new Date("31 dec 2020");
// document.write("Later date: " + laterDate);

// QUESTION 9
// var ramadanTime = new Date("18 june 2015").getTime();
// var currentTime = new Date().getTime();
// var daysPassed = (currentTime - ramadanTime) / (1000 * 60 * 60 * 24);
// alert(Math.round(daysPassed) + " days have passed since 1st Ramadan, 2015");

// QUESTION 10
// var beginningTime = new Date("1 january 2015").getTime();
// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// var elapsedSeconds = Math.round((currentTime - beginningTime) / 1000);
// document.write(
//   "On reference date " +
//     currentDate +
//     ", " +
//     elapsedSeconds +
//     " seconds had passed since beginning of 2015"
// );

// QUESTION 11
// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br/>");
// currentDate.setHours(currentDate.getHours() + 1);
// document.write("1 hour ago, it was " + currentDate + "<br/>");

// QUESTION 12
// var date = new Date();
// var currentDate = new Date();
// date.setFullYear(date.getFullYear() - 100);

// alert("Current date: " + currentDate + "\n" + "100 years back, it was" + date);

// QUESTION 13
// var userAge = parseInt(prompt("Enter you age"));
// var currentYear = new Date().getFullYear();
// document.write(
//   "Your age is " +
//     userAge +
//     "<br/>Your birth year is " +
//     (currentYear - userAge)
// );

// QUESTION 14
// var unitCharges = 16;
// var noOfUnits = 189;
// var netAmount = unitCharges * noOfUnits;
// var lateAmount = 0;
// var grossAmount = netAmount + lateAmount;

// var billHtml = "<h1>K-Electric Bill</h1>";
// billHtml += "<p>Customer Name: <b>Fuzail</b></p>";
// billHtml += "<p>Month: <b>July</b></p>";
// billHtml += "<p>Number of units: <b>" + noOfUnits + "</b></p>";
// billHtml += "<p>Chagres per units: <b>" + unitCharges + "</b></p>";
// billHtml += "<br/>";
// billHtml +=
//   "<p>Net Amount Payable (within Due Date): <b>" + netAmount + "</b></p>";
// billHtml += "<p>Late payment surchages: <b>" + lateAmount + "</b></p>";
// billHtml +=
//   "<p>Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></p>";

// document.write(billHtml);

/**
 * CHAPTERS 35-38
 */

// QUESTION 1
// function showDate() {
//   console.log(new Date());
// }
// showDate();

// QUESTION 2
// function greetings(firstName, lastName) {
//   console.log("Welcome " + firstName + " " + lastName);
// }
// greetings("fuzail", "ahmed");

// QUESTION 3
// function sumByUser() {
//   var num1 = parseFloat(prompt("Enter first number "));
//   var num2 = parseFloat(prompt("Enter second number "));
//   if (!isNaN(num1) && !isNaN(num2)) {
//     return num1 + num2;
//   } else {
//     console.log("Error: Enter valid numberss");
//   }
// }
// sumByUser();

// QUESTION 4
// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else if (operator === "%") {
//     return num1 % num2;
//   }
// }
// function showOperation(num1, num2, operator) {
//   if (isNaN(num1) || isNaN(num2))
//     return console.log("Error: Enter valid numbers");
//   if (
//     operator !== "+" &&
//     operator !== "-" &&
//     operator !== "*" &&
//     operator !== "/" &&
//     operator !== "%"
//   )
//     return console.log("Error: Enter a valid operator '+, -, *, /'");

//   document.write(
//     num1 +
//       " " +
//       operator +
//       " " +
//       num2 +
//       " = " +
//       calculator(num1, num2, operator)
//   );
// }

// showOperation(12, 32, "+");

// QUESTION 5
// function getSquare(num) {
//   return num * num;
// }
// console.log(getSquare(4));

// QUESTION 6
// function getFactorial(num) {
//   if (isNaN(num)) return num + " is not valid number";

//   for (var i = num - 1; i > 0; i--) {
//     num *= i;
//   }
//   return num;
// }
// console.log(getFactorial(5));

// QUESTION 7
// function showCount(startNum, endNum) {
//   var html = "";
//   for (var i = startNum; i <= endNum; i++) {
//     html += i + "<br />";
//   }
//   document.write(html);
// }
// showCount(1, 10);

// QUESTION 8
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }
//   return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
// }
// console.log(calculateHypotenuse(2, 3));

// QUESTION 9
// function calculateRectangleArea(width, height) {
//   return width * height;
// }
// console.log(calculateRectangleArea(2, 3));

// var width = 4;
// var height = 10;
// console.log(calculateRectangleArea(width, height));

// QUESTITON 10
// function isPalindrome(str) {
//   var strLength = str.length;
//   for (var i = 0; i < strLength / 2; i++) {
//     if (str[i] !== str[strLength - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("madam"));

// QUESTITON 11
// function toCapatalize(str) {
//   var capatalizeText = "";
//   for (var i = 0; i < str.length; i++) {
//     if (str[i - 1] === " " || i === 0) {
//       capatalizeText += str[i].toUpperCase();
//     } else {
//       capatalizeText += str[i];
//     }
//   }
//   return capatalizeText;
// }
// console.log(toCapatalize("the quick brown fox"));

// QUESTION 12
// function getLogestWord(str) {
//   str = str.split(" ");
//   var longestWord = "";
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].length > longestWord.length) {
//       longestWord = str[i];
//     }
//   }
//   return longestWord;
// }
// console.log(getLogestWord("Web Development Tutorial"));

// QUESTION 13
// function getOccuranceByLetter(str, letter) {
//   var letterOccurance = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       letterOccurance++;
//     }
//   }
//   return letterOccurance;
// }
// console.log(getOccuranceByLetter("JSResourceS.com", "o"));

// QUESTION 14
// function calcCircumference(radius) {
//   return "The circumference is " + 2 * Math.PI * radius;
// }
// function calcArea(radius) {
//   return "The area is " + Math.PI * radius * radius;
// }
// console.log(calcCircumference(5));
// console.log(calcArea(5));
