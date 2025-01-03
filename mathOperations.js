function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function logarithm(number, base = Math.E) {
    return Math.log(number) / Math.log(base);
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function absolute(number) {
    return Math.abs(number);
}

module.exports = {
    power,
    squareRoot,
    logarithm,
    factorial,
    absolute
};
