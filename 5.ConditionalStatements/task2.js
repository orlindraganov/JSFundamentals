function solve(params) {
    var a = +params[0];
    var b = +params[1];
    var c = +params[2];

    var sign;

    if ((a === 0) || (b === 0) || (c === 0)) {
        sign = 0;
    } else if ((a > 0) ^ (b > 0) ^ (c > 0)) {
        sign = "+";
    } else {
        sign = "-"
    }

    console.log(sign);
}