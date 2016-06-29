function solve(params) {
    var arr = params;
    var biggest = +arr[0];

    for (var index = 1; index < arr.length; index++) {
        if (+arr[index] > +biggest) {
            biggest = +arr[index];
        }
    }
    
    console.log(biggest);
}