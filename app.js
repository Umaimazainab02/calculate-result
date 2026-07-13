let btn = document.getElementById("calculate");

btn.addEventListener("click", function () {

    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let computer = Number(document.getElementById("computer").value);

    let total = english + math + computer;
    let average = total / 3;

    document.getElementById("total").innerHTML = "Obtain marks: " + total;

    document.getElementById("average").innerHTML = "Average: " + average.toFixed(2);

    if (average >= 40) {
        document.getElementById("status").innerHTML = "Pass";
    } else {
        document.getElementById("status").innerHTML = "Fail";
    }

});