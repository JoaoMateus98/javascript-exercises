const removeFromArray = function(...args) {
    
    const array = args[0];

    const newArray = array.filter((item) => !args.includes(item))

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
