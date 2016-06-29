function solve(params) {
    var a = +params[0];
    var b = +params[1];
    var c = +params[2];

    var d = b * b - 4 * a * c;

    if (d > 0) {
        var x1 = (-b - Math.sqrt(d))/(2*a);
        var x2 = (-b + Math.sqrt(d))/(2*a);

        if (x1 > x2) {
            x1 = x1 ^ x2;
            x2 = x1 ^ x2;
            x1 = x1 ^ x2;
        }
        var result = 'x1=' + x1.toFixed(2) +'; x2=' + x2.toFixed(2)
    } else if (d === 0) {
        var x = -b / (2*a);
        var result = 'x1=x2=' + x.toFixed(2);
    } else {
        var result = 'no real roots'
    }
    console.log(result)
}