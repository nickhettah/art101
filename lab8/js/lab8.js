//** 
// index.js - Lab 8. 
//*Author: Nicholas Hetter
//*Date: October 29th 2024

var array =[253, 69, 420, 80085];

function diddyFunctionby5(x) {
    var results= (x % 5==0)
    return results;
}
//test function 
console.log(diddyFunctionby5(7));
console.log(diddyFunctionby5(3.5));
console.log(diddyFunctionby5(-1));


console.log("my array", array)
document.getElementById("output").innerHTML += "<h2></h2><p>My Array: " + array + "</p>";//map diddy function

var result = array.map(diddyFunctionby5);
console.log("Test if divisable by 5", result);
document.getElementById("output").innerHTML += "<h2></h2><p>Test if divisable by 5: " + result + "</p>";
 

 //usemap
   
    var result = array.map(function(x){
      return x * -1;
     
})
console.log("Neagtive Arrays", result); 
document.getElementById("output").innerHTML += "<h2></h2><p>Negative Arrays: " + result + "</p>";

