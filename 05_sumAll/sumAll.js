const sumAll = function (num1, num2) {
    // If an argument is negative, return ERROR
    for (let arg of [...arguments]) {
        if (arg < 0) {
            return "ERROR"
        }
    }
    // If an argument is NaN, return ERROR
    if ( (typeof(num1) !== "number") || (typeof(num2) !== "number")) {
        return "ERROR"
    }
    // Sum every int from lowerBound to upperBound
    let lowerBound = Math.min(num1, num2);
    let upperBound = Math.max(num1, num2);

    let sum = 0;
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
