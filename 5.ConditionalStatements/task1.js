function solve(params) {
    var a = +params[0];
    var b = +params[1];

    if (a > b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }

    console.log(a + " " + b);
}