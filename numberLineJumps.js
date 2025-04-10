function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    } else {
        if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
            return "YES";
        } else {
            return "NO";
        }
    }
}

// Read input from stdin
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const x1 = parseInt(input[0], 10);
const v1 = parseInt(input[1], 10);
const x2 = parseInt(input[2], 10);
const v2 = parseInt(input[3], 10);

// Call the function and print the result
console.log(kangaroo(x1, v1, x2, v2));