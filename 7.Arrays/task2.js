function solve(params) {
    var arr = params[0].split('\n');
    var firstArr = arr[0];
    var secondArr = arr[1];
    var counter;
    
    if (firstArr.length >= secondArr.length) {
        counter = firstArr.length;
    } else {
        counter = secondArr.length;
    }

    for (var index = 0; index < counter; index += 1) {
        if (firstArr[index] > secondArr[index]) {
            console.log('>');
            break;
        } else if (firstArr[index] < secondArr[index]) {
            console.log('<');
            break;
        } else {
            if (index === counter - 1) {
                if (firstArr.length > secondArr.length) {
                    console.log('>');
                } else if (firstArr.length < secondArr.length) {
                    console.log('<');
                } else {
                    console.log('=');
                }
            }
        }
    }
}