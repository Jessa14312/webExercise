
//Problem 1
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
  var a = document.createElement(element);
  a.id = id;
  a.innerText= text;
  a.style.textAlign="center";
 document.body.append(a);
 
} 




/* Problem 1 Moderate
 Write a Javascript program wherein you have button1 and
button2. Button1 would have text inside displayed as “0”
(zero) and button2 would have text inside displayed as
“Neutral”. Whenever you click on button1, the text displayed
inside button1 is then incremented by 1, and button2 will
display “Fizz” if the number in button1 is divisible by 3, “Buzz”
if the number in button1 is divisible by 5, and “FizzBuzz” if the
number in button1 is divisible by both 3 and 5.
Extra Points: Set the color for Fizz as red, Buzz as blue, and
Fizzbuzz as the color represented when you mix red and blue. */



  var count = parseInt(1);

 function fizzbuzz(){
 

    var button1 = document.getElementById("button1").innerHTML = value = count++;

   if (button1 % 3==0 && button1 % 5 == 0) {
     document.getElementById("button2").innerHTML="FizzBuzz";
     document.getElementById("button2").style.color="violet";
  } else if (button1%3==0) {
     document.getElementById("button2").innerHTML="Fizz";
   document.getElementById("button2").style.color="red";  
   }
  else if(button1%5==0){
     document.getElementById("button2").innerHTML="Buzz";
     document.getElementById("button2").style.color="blue";
    
  }
  else{
   document.getElementById("button2").innerHTML="NEUTRAL";
    document.getElementById("button2").style.color="gray";
    }
  
}


//Problem 2 Moderate

function check(){
  var radio = document.getElementsByClassName('radio'); 
  for( var count = 0; count < radio.length; count++){
       radio[count].checked = true;
  }

}

function uncheck(){
  var radio = document.getElementsByClassName('radio'); 
  for( var count = 0; count < radio.length; count++){
       radio[count].checked = false;
  }
}



  


