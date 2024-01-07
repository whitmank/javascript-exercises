const reverseString = function(string) {
    let result = ""
    // for each character in string in reverse order, add to result.
    // for (let char of [...string].reverse()) {
    //     result += char;
    // }
    // return result;

    return string.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
