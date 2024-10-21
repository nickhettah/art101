// index.js - Lab 5 Car Details
// Author: Nicholas Hetter
// Date:10.20.2024

//(c) Copyright by Nicholas Hetter and Co. 
function main() {
console.log("Main function started.");
//define variables
var make="Honda";
var model="Insight";
var color="White";
var year=2019;

//calculate age of vehicle 
age= new Date().getFullYear()-year

//output the details of the car using document.writeln()
document.getElementById('output').innerHTML += "Make: " + make + "<br>";
document.getElementById('output').innerHTML += "Model: " + model + "<br>";
document.getElementById('output').innerHTML += "Color: "+ color +"<br>";
document.getElementById('output').innerHTML += ("Year:"+year+"<br>");
document.getElementById('output').innerHTML += ("Age:"+age+"years<br>");
}

// let's get this party started
main();
