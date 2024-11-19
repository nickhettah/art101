//nicholas 
//lab 12 
//november 13th 2024
//public


function fizzBuzz() {
    let oneLongString= "";
    for (let num = 1; num <= 200; num++) {
      if (num % 3 == 0 && num % 5 == 0) {
        oneLongString+=num + ". " + "FizzBuzz" + "<br>";
      } else if (num % 3 == 0) {
        oneLongString+= num +  ". " +"Fizz" + "<br>";
      } else if (num % 5 == 0) {
        oneLongString+=num + ". " + "Buzz" + "<br>";
      } else if (num % 7 == 0)  {
        oneLongString+=num+ ". " + "Boom" + "<br>";
      } else {
        oneLongString += num + ". " +"<br>";
      }
    }
    return oneLongString;
}


document.getElementById("output").innerHTML = "<p>" + fizzBuzz() + "</p>";
