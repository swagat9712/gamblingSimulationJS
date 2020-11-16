export let dailyStake = 100;
export let totalDays = 0;
export let totalAmount = 0;
export let bestWin = 0;
export let bestLose = 0;
export let luckiestDay = 0;
export let unluckiestDay = 0;
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
            while (dailyStake != 150 && dailyStake != 50) {
                let score = this.gambleWinOrLoose();
                if (score == 1) {
                    this.win++;
                    dailyStake++;
                }
                if (score == 0) {
                    this.lose++;
                    dailyStake--;
                }
            }
            console.log("win: " + this.win + " lose: " + this.lose + " Earned: " + dailyStake);
            if (this.win > bestWin && dailyStake == 150) {
                bestWin = this.win;
                luckiestDay = totalDays;
            }
            if (this.lose > bestLose && dailyStake == 50) {
                bestLose = this.lose;
                unluckiestDay = totalDays;
            }
            this.win = 0;
            this.lose = 0;
        } catch (e) {
            console.log("Exception: " + e);
        }
    }
    //Calling the checkWinOrLoose method 20 times//
    resultAfterNumbreOfDays() {
        try {
            while (totalDays < 30) {
                totalDays++;
                console.log("Day:" + totalDays);
                this.checkWinOrLoose();
                totalAmount = totalAmount + dailyStake - 100;
                dailyStake = 100;

            }
            totalAmount = totalAmount + 100;
            console.log("Total Days: " + totalDays + " Total amount: " + totalAmount);
            console.log("Luckiest Day: " + luckiestDay + " Unluckiest Day: " + unluckiestDay);
        }
        catch (e) {
            console.log("Exception: " + e);
        }

    }
}

