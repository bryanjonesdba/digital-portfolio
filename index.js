let firstName; // dec
let lastName; // dec
let age=44; // dec and def 
let lightOn = true; // single equal is assignment, double == is a check

function lightSwitch() {
    if (lightOn == true) { // condition 1
        lightOn = false
        console.log(lightOn)  // logs to the console
    }
    else { // condition 2
        lightOn = true
        console.log(lightOn)  // logs to the console
    }
}

lightSwitch()
lightSwitch()
lightSwitch()

let numberOne;
let numberTwo;
let total;

function addition(numberOne, numberTwo) {
    total = numberOne + numberTwo
    console.log(total)
}

addition(20,30)
addition(123,56)
addition(44,45)
addition("A","A")

// declaration definition

// variable: storage box
// firstName: Bryan
// lname: Jones