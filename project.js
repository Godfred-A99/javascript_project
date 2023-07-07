// 1. deposit some money 
// 2. determine number of lines to bet on 
// 3. collect a bet amount 
// 4. spin the slot machine 
// 5. check if the user won 
// 6. give the user their winnings  
// 7. play again 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount)|| numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, Try again.");
        }else {
            return numberDepositAmount;
        }
    }    

};

const getNumberOfLine = () => {
    while (true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ")
            const numberOfLines = parseFloat(lines);
    
            if (isNaN(numberOfLines)|| numberOfLines <= 0 || numberOfLines > 3) {
                console.log("Invalid number of lines, Try again.");
            }else {
                return numberOfLines;
            }
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter bet per line: ");
            const numberBet = parseFloat(bet);
    
            if (isNaN(numberBet)|| numberBet <= 0 || numberBet > balance / numberOfLines) {
                console.log("Invalid bet, Try again.");
            }else {
                return numberBet;
            }
        }
};

let balance = deposit();
const numberOfLines = getNumberOfLine();
const bet = getBet(balance, numberOfLines);


