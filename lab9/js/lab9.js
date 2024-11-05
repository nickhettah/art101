//** lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Lab 9. 
//*Author: Nicholas Hetter
//*Date: November 4th 2024

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add button to problems section
$("#problem").append("<button id='button-problems'>Make Special</button>");
// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the challenge button
$(" # button-challenge ").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add a click listener to the problems button 
$(" #	button-problems ").click(function(){
    // now add (or subtract) the "special" class in the section 
    $ ("#	problems").toggleClass(" special ");
}); 

//	add a click listener	to	the	results	button	 
$(" #	button-results ").click( function (){ 	
     //	now	add	(or	subtract)	the	"	special "	class	in	the	section	
      $(" #	results") . toggleClass (" special ");	
});
 