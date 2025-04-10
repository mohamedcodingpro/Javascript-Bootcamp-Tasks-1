function sockMerchant(n, ar) {
    const colorCounts = {};
    let pairs = 0;
    
    for (const color of ar) {
        if (colorCounts[color]) {
            colorCounts[color]++;
        } else {
            colorCounts[color] = 1;
        }
    }
    
    for (const color in colorCounts) {
        pairs += Math.floor(colorCounts[color] / 2);
    }
    
    return pairs;
}

// Read input from stdin
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const numberOfSocks = parseInt(input[0], 10);
const sockColors = input[1].split(' ').map(Number);

// Call the function and print the result
console.log(sockMerchant(numberOfSocks, sockColors));