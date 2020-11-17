
export default class GamblingProblem {
    constructor() {
        this.win = 0;
        this.lose = 0;
        this.dailyStake = 100;
        this.totalDays = 0;
        this.totalAmount = 0;
    }
    //taking a random value 0 or 1// 
    gambleWinOrLoose() {
        return Math.floor(Math.random() * 2);
    }
    //takeing win or loose//
    checkWinOrLoose() {
        try {
            let score = this.gambleWinOrLoose();
            while (this.dailyStake != 150 && this.dailyStake != 50) {
                if (score == 1) {
                    this.win++;
                    this.dailyStake++;
                }
                if (score == 0) {
                    this.lose++;
                    this.dailyStake--;
                }
            }
        } catch (e) {
            console.log("Exception: " + e);
        }
    }
    //Calling the checkWinOrLoose method 20 times//
    resultAfterNumbreOfDays() {
        try {
            while (this.totalDays < 20) {
                console.log("Day:" + this.totalDays);
                this.checkWinOrLoose();
                this.totalAmount = this.totalAmount + this.dailyStake;
                this.dailyStake = 100;
                this.totalDays++;
            }
            console.log("Total Days: " + this.totalDays + " Total amount: " + this.totalAmount);
        }
        catch (e) {
            console.log("Exception: " + e);
        }

    }
}
