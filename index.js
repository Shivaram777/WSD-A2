function string() {
    let text = document.getElementById("shiva").value;
    let a = text.split("").reverse().join("");
    alert("The String is = " + a);


}


function number() {
    let num = document.getElementById("2").value;
    let x = num.split("").reverse().join("");
    if (x === num) {
        alert("It is a palindrome number");
    }
    else {
        alert("It is not a palindrome number");
    }

}

function tipcalculator() {
    let billtotal = parseInt(document.getElementById("4").value);
    let percentoftip = parseInt(document.getElementById("5").value);
    let total = (billtotal * percentoftip) / 100;
    let amount = billtotal + total;
    alert("The total amount is:" + amount)
}


































