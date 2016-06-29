function solve(params) {
    var arr = params[0].split('\n');
    var size = +arr[0];
    var target = +arr[arr.length - 1];

    arr.shift();
    arr.pop();

    var startIndex = 0
    var endIndex = size - 1;
    var midIndex = 0;
    var result = -1

    while (startIndex <= endIndex) {

        midIndex = ((endIndex + startIndex) / 2) | 0;

        if (target === +arr[midIndex]) {
            result = +midIndex;
            break;
        } 
        else if (target < +arr[midIndex]) {
            endIndex = midIndex - 1;
        } 
        else {
            startIndex = midIndex + 1;
        }
    }
    console.log(result);
}