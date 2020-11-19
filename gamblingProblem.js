
let utility = require("./util.js");
let readlineSync = require('readline-sync');
console.log("Welcome to Gambling simulation!");
utility.resultAfterNumbreOfDays();
continueMonth = function() {
    let isTerminated = false;
    try {
        while (isTerminated != true) {
            let choice = readlineSync.prompt("Enter if you want to continue next month(yes/no): ");
            if (choice == "yes") {
                utility.resultAfterNumbreOfDays();
            }
            if (choice == "no") {
                console.log("Good Gambling!");
                isTerminated = true;
            }
            else {
                console.log("Wrong Choice!");
            }
        }
    }
    catch (e) {
        console.log("Exception:" + e);
    }
}
continueMonth();
