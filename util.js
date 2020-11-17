
class GamblingProblem {
    constructor() {
        this.win = 0;
        this.lose = 0;
        this.dailyStake = 100;
        this.totalDays = 0;
        this.totalAmount = 0;
        this.bestWin = 0;
        this.bestLose = 0;
        this.luckiestDay = 0;
        this.unluckiestDay = 0;
    }
    //taking a random value 0 or 1// 
    gambleWinOrLoose() {
        return Math.floor(Math.random() * 2);
    }
    //takeing win or loose//
    checkWinOrLoose() {
        try {
            while (this.dailyStake != 150 && this.dailyStake != 50) {
                let score = this.gambleWinOrLoose();
                if (score == 1) {
                    this.win++;
                    this.dailyStake++;
                }
                if (score == 0) {
                    this.lose++;
                    this.dailyStake--;
                }
            }
            console.log("win: " + this.win + " lose: " + this.lose + " Earned: " + this.dailyStake);
            if (this.win > this.bestWin && this.dailyStake == 150) {
                this.bestWin = this.win;
                this.luckiestDay = this.totalDays;
            }
            if (this.lose > this.bestLose && this.dailyStake == 50) {
                this.bestLose = this.lose;
                this.unluckiestDay = this.totalDays;
            }
            this.win = 0;
            this.lose = 0;
        } catch (e) {
            console.log("Exception1: " + e);
        }
    }
    //Calling the checkWinOrLoose method 20 times//
    resultAfterNumbreOfDays() {
        try {
            while (this.totalDays < 30) {
                this.totalDays++;
                console.log("Day:" + this.totalDays);
                this.checkWinOrLoose();
                this.totalAmount = this.totalAmount + this.dailyStake - 100;
                this.dailyStake = 100;

            }
            this.totalAmount = this.totalAmount + 100;
            console.log("Total Days: " + this.totalDays + " Total amount: " + this.totalAmount);
            console.log("Luckiest Day: " + this.luckiestDay + " Unluckiest Day: " + this.unluckiestDay);
        }
        catch (e) {
            console.log("Exception2: " + e);
        }

    }
}

module.exports = new GamblingProblem();
