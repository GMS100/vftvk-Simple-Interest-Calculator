//compute and display simple interest 
function compute()
{
    //create variables for data from form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //confirm principal is a valid number > 0
    if (!validatePrincipal())
    {
        return;
    }
    
    //calculate the interest earned
    var interest = (principal * years * rate)/100;

    //identify the end year 
    var year = new Date().getFullYear()+parseInt(years);

    //format and display result
    document.getElementById("result").innerHTML=
    "If you deposit \<mark\>" + principal + "\</mark\>, \<br\>" +
    "at an interest rate of \<mark\>" + rate + "%\</mark\>. \<br\>" +
    "You will receive an amount of \<mark\>" + interest + "\</mark\>, \<br\>" +
    "in the year \<mark\>" + year + "\</mark\>\<br\>"
}

//display rate range value
function updateRate()
{
    //retrieve the value selected by the slider
    var rateval = document.getElementById("rate").value;

    //set display to the value from slider
    document.getElementById("rate_val").innerText=rateval + "%";
}
       
function validatePrincipal() 
{
    var principal = document.getElementById("principal").value;

    //verify that principal is not empty and is a number > 0
    if (!principal || isNaN(principal) || principal < 1)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    } else {
        return true;
    }
        

}