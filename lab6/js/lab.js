/** 
// index.js - Lab 6. 
  *Author: Nicholas Hetter
  *Date: October 23rd 2024
**/
//define variables
  //array
myTransport= ["honda insight", "bus","bike"];
 

  myMainRide = {
    make: "honda",
    model: "insight", 
    color: "white",
   year:2019, 
    age: function(){
        return 2024 - this.year;
    }
}
//output
document.writeln("Kinds of Transportation I use: " + myTransport +"<br>");
  
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
 
