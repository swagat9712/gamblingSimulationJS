export let dailyStake = 100;
export let totalDays = 0;
export let totalAmount = 0;
export default class GamblingProblem {
    constructor(win, lose) {
        this.win = win;
        this.lose = lose;
    }
    //taking a random value 0 or 1// 
    gambleWinOrLoose() {
        return Math.floor(Math.random() * 2);
    }
    //takeing win or loose//
    checkWinOrLoose() {
        try {
            let score = this.gambleWinOrLoose();
            while (dailyStake != 150 && dailyStake != 50) {
                if (score == 1) {
                    this.win++;
                    dailyStake++;
                }
                if (score == 0) {
                    this.lose++;
                    dailyStake--;
                }
            }
        } catch (e) {
            console.log("Exception: " + e);
        }
    }
    //Calling the checkWinOrLoose method 20 times//
    resultAfterNumbreOfDays() {
        try {
            while (totalDays < 20) {
                console.log("Day:" + totalDays);
                this.checkWinOrLoose();
                totalAmount = totalAmount + dailyStake;
                dailyStake = 100;
                totalDays++;
            }
            console.log("Total Days: " + totalDays + " Total amount: " + totalAmount);
        }
        catch (e) {
            console.log("Exception: " + e);
        }

    }
}
