/** 
// index.js - Lab 7. 
  *Author: Nicholas Hetter
  *Date: October 23rd 2024
**/
function sortUserName(){
    var userName = window.prompt("Hi Please tell me your name so I can fix it.");
    console.log("userName is:", userName);
//SPLIT STRING TO ARRAY
    var nameArray = userName.split("");
    console.log("nameArray=", nameArray);
//SORT THE ARRAY
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort", nameArraySort);
//JOIN ARRAY TO STRING
    var nameSorted=nameArraySort.join("");
    console.log("nameSorted=",nameSorted);
    //RETURN ARRAY
   return nameSorted;
}
//output
document.writeln("Oh hello again, I fixed your name: ", 
    sortUserName(),"<b/br>");