// if , else, else if

if(2 == "2"){
    console.log("Executed"); // Executed
}

if(2 == '2'){
    console.log("Executed"); // Executed
}

if(2 === '2'){
    console.log("Executed"); // no Output
}

if(2 !== '2'){
    console.log("Executed"); // Executed
}

let temp = 43
if(temp > 50){
    console.log("Temperature is greater than 50");
}else{
    console.log("Temperature is not greater than 50");
} // Temperature is not greater than 50

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User can ${power}`); // User can fly
}
// console.log(`User can ${power}`); // Error -> becoz power is out of scope

const balance = 1453
if(balance > 1200) console.log("You are Rich"); // You are Rich

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750){
    console.log("Less than 750 but greater than 500");
}else if(balance < 1000){
    console.log("Less than 1000 but greater than 750");
}else if(balance < 1250){
    console.log("you have greater than 1000 but less than 1250");
}else if(balance < 1500){
    console.log("You have greater more than 1250 but less than 1500");
}else{
    console.log("You have greater more than 1500");
} // You have greater more than 1250 but less than 1500


const userLoggedIn = true
const debitCard  = true
const LoggedInfromEmail = true;
const LoggedInfromGoogle = false
if(userLoggedIn && debitCard){
    console.log("Allow to purchase website"); // Allow to purchase website   
}
if(LoggedInfromEmail){
    console.log("User Logged in through Email");
}else if(LoggedInfromGoogle){
    console.log("User Logged in through Google");
}else if(userLoggedIn){
    console.log("User Logged in without using Email or Google");
} // User Logged in through Email























