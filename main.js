function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(1);
var y = x.insertCell(0);
y.innerHTML="YOU ADD ANOTHER ROW  ";
}

/* problem 2*/
function getOptions(){
    var x= document.getElementById("mySelect")
    var txt1 = "No. of items : ";
  var i;
  l=document.getElementById("mySelect").length;  
  txt1 = txt1+l;
  for (i=0;i<x.length;i++)
    {
      txt1 = txt1 + "\n" + x.options[i].text;
    }
  alert(txt1);
  }

  /* Problem 3 Write a Javascript function where you take 3 parameters. These
parameters would represent the element you want to create. You
have the parameters id, element, and, text. Parameter id would
represent the id of the element created, element would represent
the element you are creating (p, button, h1, etc.), and text being the
text displayed in the element created. The said element would then
be added to the body.*/

function parameter( id, element, text){
  var div=document.getElementsByTagName("DIV");
  console.log(div);
  var a= document.createElement(element);
  a.id= id;
  a.innerText= text;
  a.style.textAlign="center";
  a.classList.add("Jessa");
  document.body.appendChild(a);
} 
parameter(" header","h1"," sheytttttt");


/* Problem 1 Moderate_ Write a Javascript program wherein you have button1 and
button2. Button1 would have text inside displayed as “0”
(zero) and button2 would have text inside displayed as
“Neutral”. Whenever you click on button1, the text displayed
inside button1 is then incremented by 1, and button2 will
display “Fizz” if the number in button1 is divisible by 3, “Buzz”
if the number in button1 is divisible by 5, and “FizzBuzz” if the
number in button1 is divisible by both 3 and 5.
Extra Points: Set the color for Fizz as red, Buzz as blue, and
Fizzbuzz as the color represented when you mix red and blue. */

var 



  


