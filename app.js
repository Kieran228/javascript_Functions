


//? function schema
//? making functions saves blocks of code to be ran when we need it.
//? INSTEAD of immediately running as the page loads
function funcOne() {
    console.log("Hello World")
    console.log(5 + 7);
};

funcOne();

let numOne = 7;
let numTwo = 3;

function addTwoNums() {
    console.log(numOne + numTwo)
};

addTwoNums();

function addTwoNumsV2 (a,b) {
    console.log(a + b)
}

addTwoNumsV2(numOne, numTwo);

addTwoNumsV2(6, 10);

addTwoNumsV2("Hello ", "Kieran!");

function greeting() {
    console.log("Hi")   
}
function greetingByName(name) {
    if (name == 'Mike') {
        
    } else {
        console.log("Hello, " + name + "! welcome to the site.")
    }
}
greetingByName("Mike");
greetingByName("Dayna");

function grettingByExcitement(name) {
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);
    //* return is sending back the output of this function
    return upperCaseName
}

//* If yu ever need a function to send back new data, you'll need a return
let screamingName = grettingByExcitement("kieran");

console.log(screamingName);

console.log(`HELLOOOOOOOOOOO ${screamingName} IT'S NORTHERN LIGHT SUPLEX SINGER!!`);

//? This function shows DEFAULT values being added in the Arguments
function sandwichMaker(typeOfBread, typeOFMeat = "N/A", typeOFSauce, typeOfVeggie = "N/A") {
    console.log(`Bread: ${typeOfBread} Meat: ${typeOFMeat} Sauce: ${typeOFSauce} Veggies: ${typeOfVeggie}`)
    
    return sandwichMaker
}

let zachSandwich = sandwichMaker("white", "ham", "honeymustard", "lettuce");
let margaritoSandwich = sandwichMaker("white", "rotisserie", "buffalo")