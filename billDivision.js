function bonAppetit(bill, k, b) {
    const totalShared = bill.reduce((sum, item, index) => index === k ? sum : sum + item, 0);
    const annaShare = totalShared / 2;
    if (annaShare === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
});

rl.on('close', () => {
    const [n, k] = inputLines[0].split(' ').map(Number);
    const bill = inputLines[1].split(' ').map(Number);
    const b = parseInt(inputLines[2], 10);
    bonAppetit(bill, k, b);
});