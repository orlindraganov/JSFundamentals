function solve(params) {
    var a = +params[0];
    var b = +params[1];
    var c = +params[2];

    var first;
    var second;
    var third;

    if ((a >= b) && (a >= c)) {
        first = a;
        if (b >= c) {
            second = b;
            third = c;
        } else {
            second = c;
            third = b;
        }
    } else if ((b >= a) && (b >= c)) {
        first = b;
        if (a >= c) {
            second = a;
            third = c;
        } else {
            second = c;
            third = a;
        }
    } else {
        first = c;
        if (a >= b) {
            second = a;
            third = b;
        } else
            second = b;
        third = a;
    }
    console.log(first + " " + second + " " + third);
}