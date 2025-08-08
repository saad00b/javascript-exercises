const getAge = function (person) {
    if ("yearOfDeath" in person) {
        return (person.yearOfDeath-person.yearOfBirth);
    }
    let now = new Date();
    return (now.getFullYear()-person.yearOfBirth);
};

const findTheOldest = function(arr) {
    return arr.reduce((acc,curr) => {
        return getAge(curr) < getAge(acc) ? acc : curr;});

};

// Do not edit below this line
module.exports = findTheOldest;
