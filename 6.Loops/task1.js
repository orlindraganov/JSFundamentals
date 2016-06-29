function solve(params) {
    var num = +params[0];

    var output = 1;

    for (var index = 2; index <= num; index++) {
        output = output + ' ' + index;
    }
    console.log(output)
}