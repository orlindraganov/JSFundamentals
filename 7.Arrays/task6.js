function solve(params) {
    var arr = params[0].split('\n');
    var size = +arr[0];

    arr.splice(0, 1);

    var counter = 1;
    var counted = +arr[0];
    var maxCount = 0;
    var maxCounted;

    arr.sort();
    for (var index = 0; index < size - 1; index += 1) {
        if (arr[index] === arr[index + 1]) {
            counter += 1;
            counted = arr[index];
        } else {
            counter = 1;
            counted = arr[index];
        }
        if (counter > maxCount) {
            maxCount = counter;
            maxCounted = counted;
        }
    }
    console.log(maxCounted + " (" + maxCount + " times)");
}