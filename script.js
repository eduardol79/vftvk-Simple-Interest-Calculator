function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()   
{   var principal; //declaring variable//
    var principal = document.getElementById("principal").value; //getting and storing the value in the variable principal//
    var rate; //declaring variable//
    var rate = document.getElementById("rate").value; //getting and storing the value in the variable rate//
    var years; //declaring variable//
    var years = document.getElementById("years").value; // getting and storing the value in the variable years//
    var year; //declaring variable//
    var year = new Date().getFullYear()+parseInt(years);
    
    var amount = principal * years * rate /100 ; //calculating and storing the result in  variable amount//
    document.getElementById("result").innerHTML="If you deposit <mark> " +principal+ "</mark>, <br> at an interest rate of <mark>" +rate+ "%</mark>. <br> You will receive an amount of  <mark>" +amount+ "</mark>,<br> in the year <mark>" +year+ "</mark>.";
    //returning an a string with innerHTML with the values of the variables//
    document.getElementById("principal").focus() //using the HTMLElement.focus() to return once we press the button we return to principal input//
    if (principal < 1) {
        alert("Enter a positive number");
    }
    
    }
