const removeFromArray = function(array, ...arg) {
    let newArray = array.filter(num => !arg.includes(num));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
