module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    var strReverse = n.toString().split("").reverse().join("");
    // console.log("b :>> ", strReverse);
    return strReverse;
};
