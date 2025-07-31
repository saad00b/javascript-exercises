const reverseString = function(string) {
    let arr = string.split("");
    let n = arr.length ;
    for (let i=0;i < n/2;i++)
    {
        let temp = arr[i];
        arr.splice(i,1,arr[n-i-1]);
        arr.splice(n-i-1,1,temp);
    }
    return arr.join("")
};

// Do not edit below this line
module.exports = reverseString;
