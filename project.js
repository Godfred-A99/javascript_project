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
SYMBOLS_VALUES = {
    A : 10,
    B : 8,
    C : 6,  
    D : 4
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

            if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / numberOfLines) {
                console.log("Invalid bet, Try again.");
            }else {
                return numberBet;
            }
        }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
for (let i =0; i < COLS; i++) {
    reels.push([])
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++){
        randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = () => {
    const rows = [];

    for (let i =0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++)
        rows[i].push(reels[j][i]);
    }
    return rows;
};
const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
    }
};

const getWinnigs = (rows, bet, lines) => {
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbols != symbols[0]) {
                allSame = false;
                break;
            }
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLine();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);


