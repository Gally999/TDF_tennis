// Tennis
// About this Kata

// This Kata is about implementing a simple tennis game. I came up with it while thinking about Wii tennis, where they have simplified tennis, so each set is one game.

// The scoring system is rather simple:

// 1. Each player can have either of these points in one game 0 15 30 40

// 2. If you have 40 and you win the ball you win the game, however there are special rules.

// 3. If both have 40 the players are deuce. a. If the game is in deuce, the winner of a ball will have advantage and game ball. b. If the player with advantage wins the ball he wins the game c. If the player without advantage wins they are back at deuce.

// Definition of a class for the players
class Player {
    points = 0;
    hasBall = false;
    hasAdvantage = false;
    hasWon = false;

    scores() {
        switch(this.points) {
            case 0:
                this.points = 15;
                break; 
            case 15:
                this.points = 30;
                break; 
            case 30: 
                this.points = 40;
                break; 
            default: 
                return `I'm not sure who won the ball!`

        }
    }

}

// Creation of our 2 players
const player1 = new Player();
const player2 = new Player();

function playGame(player1, player2) {
    
    while (player1.hasWon === false && player2.hasWon === false) {

        let randomNumber = Math.floor(Math.random() * 2);
        
        // handling the scoring of player1
        if (randomNumber === 0) {
            if (player1.points < 40) {
                player1.scores();
                
            } else if (player1.points === 40 && player2.points < 40) {
                player1.hasWon = true;

                // handling equality
            } else if (player1.points === 40 && player2.points === 40) {
                if (player1.hasAdvantage === false && player2.hasAdvantage === false) {
                    player1.hasAdvantage = true;
                    
                } else if (player1.hasAdvantage === true && player2.hasAdvantage === false) {
                    player1.hasWon = true;
                    
                } else if (player1.hasAdvantage === false && player2.hasAdvantage === true) {
                    player2.hasAdvantage = false;
                    
                }
            }
            // handling the scoring of player2
        } else if (randomNumber === 1) { 
            if (player2.points < 40){
                player2.scores();
                
            } else if (player2.points === 40 && player1.points < 40) {
                player2.hasWon = true;
                
                // handling equality
            } else if (player1.points === 40 && player2.points === 40) {
                if (player2.hasAdvantage === false && player1.hasAdvantage === false) {
                    player2.hasAdvantage = true;
                    
                } else if (player2.hasAdvantage === true && player1.hasAdvantage === false) {
                    player2.hasWon = true;
                    
                } else if (player2.hasAdvantage === false && player1.hasAdvantage === true) {
                    player1.hasAdvantage = false;
                    
                }
            }
        }

    }
    const winner = player1.hasWon ? "player1" : "player2";
    return `${winner} has won the game!`
}