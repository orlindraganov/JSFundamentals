function solve(params) {
    var min = +params[0];
    var max = +params[0];
    var sum = 0;
    var avg = 0;

    for (var index = 0; index < +params.length; index++) {
        var currentNum = +params[index];
        if (+currentNum < min) {
            min = +currentNum;
        }
        if (+currentNum > max) {
            max = +currentNum;
        }
        sum += +currentNum;
    }
    avg = +sum / +params.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
