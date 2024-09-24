let calculate = document.getElementById("calculate");
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let Operator = document.getElementById("Operator");

    calculate.addEventListener("click", function() {
        let Op = Operator.value;
        let total = 0;

        if (Op == "+") {
            total = parseFloat(num1.value) + parseFloat(num2.value);
            result.textContent = `The sum is ${total}`;
        } else if (Op == "-") {
            total = parseFloat(num1.value) - parseFloat(num2.value);
            result.textContent = `The difference is ${total}`;
        } else if (Op == "*") {
            total = parseFloat(num1.value) * parseFloat(num2.value);
            result.textContent = `The product is ${total}`;
        } else if (Op == "/") {
            if (num2.value == 0) {
                result.textContent = "Cannot divide by zero";
            } else {
                total = parseFloat(num1.value) / parseFloat(num2.value);
                result.textContent = `The quotient is ${total}`;
            }
        }
    });


    /*
    //how to use if
    //syntax if
    let age = 50;
    // < > ==

    //IF AGE IS LESS THAN 10 THEN PRINT "CHILD" ELSE IS GREATER THAN 10 PRINT "ADULT" ELSE PRINT "SENIOR"
    //

    if(age >= 1 && age <= 20){
        alert("child")
    }else if(age >= 20 && age <= 40) {
        alert("adult")
    }else{
        alert("senior")
    } */



/*    
//how to declare variable in javascript
//let and constant

let name = "Louid";
let lastname = "Rabanes";
let address = "mandaue city";

//how to display variable value
//by using backtick '' Template String
console.log(`My name is ${name} ${lastname} My address is ${address}`);

//Output : My name is name lastname my address is mandaue city

//calculator
let num1 = 100;
let num2 = 200;
let sum = num1 + num2;

console.log(`The sum is ${sum}`);
*/