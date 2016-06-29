function solve(params) {
    var arr = params[0].split('\n');
    var size = +arr[0];
    var seqNum;
    var counter;
    var maxCount = 0;
    arr.splice(0, 1);

    for (var index = 0; index < size; index += 1) {
        if (arr[index] === seqNum) {
            counter += 1;
        } else {
            counter = 1;
            seqNum = arr[index];
        }
        if (counter > maxCount) {
            maxCount = counter;
        }
    }
    console.log(maxCount);
}