/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Nicholas Hetter
   Date: November 11th 2024
*/
//little helper function.


function sortString(inputString) {
    return inputstring.split('').sort().join('');
}
    
    
 $("#submit").click(function(){
const userName = $("#user-name").val ();
 userNameSorted = sortString(userName);
  $("#output").html('<div class="text"><p>'+ userNameSorted+'</p></div>');
    });
