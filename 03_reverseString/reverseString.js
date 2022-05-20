const reverseString = function(str) {
    let myArray = [];

    if (str.length === 0) return '';

    for (let i = 0; i < str.length; i++) {
        myArray.unshift(str.charAt(i));
    }
    return myArray.join("");
};
// Do not edit below this line
module.exports = reverseString;
