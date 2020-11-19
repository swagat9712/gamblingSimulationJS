
let utility = require("./util.js");
var readlineSync = require('readline-sync');
console.log("Welcome to Gambling simulation!");
utility.resultAfterNumbreOfDays();
continueMonth = function() {
    let isTerminated = false;
    let count = 2;
    try {
        while (isTerminated != true) {
            //let choice = readlineSync.prompt("Enter if you want to continue next month(yes/no): ");
            let choice = readlineSync.question(`Enter if you want to continue to month ${count} (Y/N):`);
            if (choice == "Y") {
                utility.resultAfterNumbreOfDays();
                count++ ;
            }
            if (choice == "N") {
                console.log("Good Gambling!");
                isTerminated = true;
            }
            else {
                console.log("Wrong Choice! or amount less then $100");
            }
        }
    }
    catch (e) {
        console.log("Exception:" + e);
    }
}
continueMonth();
