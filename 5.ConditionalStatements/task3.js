function solve(params) {
    var a = +params[0];
    var b = +params[1];
    var c = +params[2];

    var biggest;

    if (a >= b && a >= c) {
        biggest = a;
    } else if (b >= a && b >= c) {
        biggest = b;
    } else {
        biggest = c;
    }

    console.log(biggest);
}