function compute()
{
    //create variables for data from form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //calculate the interest earned
    var interest = (principal * years * rate)/100;

    //identify the end year 
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML=
    "If you deposit " + principal + ", \<br\>" +
    "at an interest rate of " + rate + "%. \<br\>" +
    "You will receive an amount of " + interest + ", \<br\>" +
    "in the year " + year + "\<br\>"
}

function updateRate()
{
    //retrieve the value selected by the slider
    var rateval = document.getElementById("rate").value;

    //set display to the value from slider
    document.getElementById("rate_val").innerText=rateval + "%";
}
        