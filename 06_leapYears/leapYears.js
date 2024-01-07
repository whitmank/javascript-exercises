const leapYears = function (number) {
    let isLeapYear = undefined;
    if (number % 4 == 0) {
        if ((number % 100 == 0) && (number % 400 != 0)) {
            isLeapYear = false;
        } else isLeapYear = true;
    } else isLeapYear = false;
    
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
