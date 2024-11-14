// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Lab 9.
//* Author: Nicholas Hetter
//* Date: November 4th, 2024

// Add a click listener to the challenge button
$("#button-challenge").click(function(){
    console.log("Challenge button clicked");
    $("#challenge").toggleClass("special");
});

// Add a click listener to the problems button
$("#button-problems").click(function(){
    console.log("Problems button clicked");
    $("#problem").toggleClass("special");
});

// Add a click listener to the results button
$("#button-results").click(function(){
    console.log("Results button clicked");
    $("#results").toggleClass("special");
});
