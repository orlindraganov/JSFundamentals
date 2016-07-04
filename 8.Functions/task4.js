function solve(params) {
    var size = params[0];
    var arr = params[1].split(' ');
    var size = arr[2];
    var target = +arr[arr.length - 1];

    arr.shift();
    arr.pop();

console.log(CountAppearances(target, arr));

    function CountAppearances(target, arr) {
        var counter = 0;
        for (var index = 0; index < arr.length; index++) {
            if (+arr[index] === +target) {
                counter += 1;
            }
        }
        return counter;
    }

}