function solve(params) {
    var arr = params[0].split('\n');
    var size = +arr[0];
    var counter = 1;
    var maxCount = 0;

    arr.splice(0, 1);

    for (var index = 0; index < size - 1; index++) {
        if (+arr[index + 1] > +arr[index]) {
            counter++;
        }
        else {
            if (maxCount < counter) {
                maxCount = counter;
            }
            counter = 1;
        }
    }
    console.log(maxCount);
}