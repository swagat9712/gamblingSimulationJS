let utility = require("./util.js");
console.log("Welcome to Gambling simulation!");
utility.resultAfterNumbreOfDays();
let choice = window.prompt("Enter if you want to continue next month(yes/no): ");
if(choice == "yes"){
    utility.resultAfterNumbreOfDays();
}
if(choice == "no"){
    console.log("Good Gambling!");
} 
else{
    console.log("Wrong Choice!");
}
