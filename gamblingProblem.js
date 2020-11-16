console.log("Welcome to Gambling simulation!");
let dailyStake = 100;
let everyGameBet = 1;
class GamblingProblem {
    constructor(win, lose){
        this.win = win;
        this.lose = lose;
    }
    gambleWinOrLoose(){
        return Math.floor(Math.random() * Math.floor(1));
    }
    checkWinOrLoose(){
        let score = this.gambleWinOrLoose();
        while (dailyStake != 150 && dailyStake != 50) {
            if (score == 1) {
                this.win += 1;
                dailyStake += 1;
            }
            if (score == 0) {
                this.lose += 1;
                dailyStake -= 1;
            }
        }

    }

}
