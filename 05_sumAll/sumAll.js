const sumAll = function(start, stop) {
if (typeof(start) != 'number' || typeof(stop) != 'number' || start < 0 || stop < 0) return 'ERROR';

if (start > stop) {
    const temp = start;
    start = stop;
    stop = temp;
}

let result = 0;
for (let i = start; i <= stop; i++) {
    result += i;
}

return result;
};

// Do not edit below this line
module.exports = sumAll;
