


// //? function schema
// //? making functions saves blocks of code to be ran when we need it.
// //? INSTEAD of immediately running as the page loads
// function funcOne() {
//     console.log("Hello World")
//     console.log(5 + 7);
// };

// funcOne();

// let numOne = 7;
// let numTwo = 3;

// function addTwoNums() {
//     console.log(numOne + numTwo)
// };

// addTwoNums();

// function addTwoNumsV2 (a,b) {
//     console.log(a + b)
// }

// addTwoNumsV2(numOne, numTwo);

// addTwoNumsV2(6, 10);

// addTwoNumsV2("Hello ", "Kieran!");

// function greeting() {
//     console.log("Hi")   
// }
// function greetingByName(name) {
//     if (name == 'Mike') {
        
//     } else {
//         console.log("Hello, " + name + "! welcome to the site.")
//     }
// }
// greetingByName("Mike");
// greetingByName("Dayna");

// function grettingByExcitement(name) {
//     let upperCaseName = name.toUpperCase();
//     console.log(upperCaseName);
//     //* return is sending back the output of this function
//     return upperCaseName
// }

// //* If yu ever need a function to send back new data, you'll need a return
// let screamingName = grettingByExcitement("kieran");

// console.log(screamingName);

// console.log(`HELLOOOOOOOOOOO ${screamingName} IT'S NORTHERN LIGHT SUPLEX SINGER!!`);

// //? This function shows DEFAULT values being added in the Arguments
// function sandwichMaker(typeOfBread, typeOFMeat = "N/A", typeOFSauce, typeOfVeggie = "N/A") {
//     console.log(`Bread: ${typeOfBread} Meat: ${typeOFMeat} Sauce: ${typeOFSauce} Veggies: ${typeOfVeggie}`)
    
//     return sandwichMaker
// }

// let zachSandwich = sandwichMaker("white", "ham", "honeymustard", "lettuce");
// let margaritoSandwich = sandwichMaker("white", "rotisserie", "buffalo");

//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 
//TODO Define an Array: Define an array containing a list of grades.
//TODO Create a Function: Create a function to calculate the average of the grades.
//TODO Create Another Function: Create another function to determine the letter grade based on the average.
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade.

let grades = [62, 75, 68, 78, 85, 92, 98];

function averageCalc(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    let average = sum / grades.length
    return average
};

let calc = averageCalc(grades);

console.log(calc)

function gradeAssigner(calc) {
        if (calc >= 90 && calc < 100) {
            console.log("You got an A for the class! " + calc.toFixed(2))
        } else if (calc >= 80 && calc < 90) {
            console.log("You got an B for the class! " + calc.toFixed(2))
        } else if (calc >= 70 && calc < 80) {
            console.log("You got an C for the class! " + calc.toFixed(2))
        } else if (calc >= 60 && calc < 70) {
            console.log("You got an D for the class! " + calc.toFixed(2))
        } else if (calc <= 59) {
            console.log("You got an F for the class! " + calc.toFixed(2))
        } else {
            console.log("You put in the wrong number ");
        }
}

let letterGrade = gradeAssigner(calc)

 
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.

let balance = 500;
let amount;

function depositFunc(amount) {
    balance += amount;
    return amount;
};

let afterDepositBalance = depositFunc(100);
console.log("You deposited: $" + afterDepositBalance.toFixed(2))
console.log("This is your balance after your deposit: $" + balance)

function withdrawFunc(amount) {
    if (balance >= amount) {
        balance -= amount;
        console.log("You Withdrew: $" + amount)
        console.log("This is your balance after your withdrawal $" + balance)
    } else {
        console.log("Insufficient Funds")
    }
};

withdrawFunc(700)

function checkBalance(balance) {
    return balance;
};

let currentBalance = checkBalance(balance)
console.log(`This is your current balance: $${currentBalance.toFixed(2)}`)

 
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.
let tasksToDo = [];

//TODO Create Functions: Create functions to add a task and display the to-do list.
function addTask(additionalTask) {
    tasksToDo.push(additionalTask)
    console.log(tasksToDo)
}

function displayToDoList() {
    console.log(tasksToDo)
}

function removeAnItem(taskcompleted) {
    // if (taskcompleted == "Make bed") {
    //     console.log("It's Here!")
    // }
    let uppercaseTaskCompleted = taskcompleted.toUpperCase();
    console.log(uppercaseTaskCompleted)


    //TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.

    for (let i = 0; i < tasksToDo.length; i++) {
        let currentTaskItem =tasksToDo[i].toUpperCase
        if (uppercaseTaskCompleted == currentTaskItem) {
            tasksToDo.splice(i, 1);
            console.log(tasksToDo)
        }
    }
}

//* Output Results: Use console.log to display the to-do list after each operation.
addTask("Make Bed, Eat, Sleep, ")
addTask("Work out, ");
addTask("Go to class, ");
//! BONUS: Be able to remove a task o.o
removeAnItem("Make Bed");
removeAnItem("Work ");


//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
let unitValue = ""
let tempValue = ""
let targetValue = ""

//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
function tempConverter(previousUnit, temperature, desiredUnit) {
   if (desiredUnit === "K" && previousUnit == "C") {
       return (temperature + 273.15);
   } else if (desiredUnit == "F" && previousUnit == "C") {
        return (temperature * 9/5 + 32);
   } else if (desiredUnit == "C" && previousUnit == "K") {
        return (temperature - 273.15);
   } else if (desiredUnit == "C" && previousUnit == "F") {
        return (temperature - 32) * 5/9;
   }
};

let checktemp = tempConverter("K", 90, "C")
console.log("Your converted temp is: " + checktemp.toFixed(2));
//! End of First Tempature converter

//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
let tempNum = 25;
let tempUnit = "c"
let newTempNum = 0;

//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
function celsiusToKelvin(value) {
    //* I know im going to have to store this kelvin number somewhere.
    //* Planning to retun to a stored variable.
    return value + 273.15
}

function celsiusToFahrenheit(value) {
    return (value * 9/5) + 32;
}

function kelvinToCelsius(value) {
    return value - 273.15
}

function fahrenheitToCelsius(value) {
   return (value - 32) * 5/9
}

function tempConvert(currentTempValue, currentTempLetter) {
    console.log(currentTempValue + " is the tempNum")
    console.log(currentTempLetter + " is the tempUnitLetter")
    let upperCaseLetter = currentTempLetter.toUpperCase();
    let celsius = 0;
    let farenheit = 0;
    let kelvin = 0;

    if (upperCaseLetter === "C") {
        farenheit = celsiusToFahrenheit(currentTempValue)
        kelvin = celsiusToKelvin(currentTempValue)
        celsius = currentTempValue;
        console.log(`Farenheit ${farenheit} Kelvin: ${kelvin} Celsius: ${celsius}`)
    } else if (upperCaseLetter === "F") {
        farenheit = currentTempValue
        kelvin = celsiusToKelvin(currentTempValue)
        celsius = fahrenheitToCelsius(currentTempValue)
        console.log(`Farenheit ${farenheit} Kelvin: ${kelvin} Celsius: ${celsius}`)
    } else if (upperCaseLetter === "K") {
        farenheit = celsiusToFahrenheit(celsius)
        kelvin = currentTempValue;
        celsius = kelvinToCelsius(currentTempValue)
        console.log(`Farenheit ${farenheit} Kelvin: ${kelvin} Celsius: ${celsius}`)
    }
}

tempConvert(tempNum, tempUnit)

//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature

//* celsiusToKelvin:
//* celsiusNum + 273.15

//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32

//* KelvinToCelsius conversion:
//* kelvinNum - 273.15

//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.