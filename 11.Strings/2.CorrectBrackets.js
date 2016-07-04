function solve(params) {
    var input = String(params);
    var bracket = 0;
    
    for (var index = 0; index < input.length; index++) {
        if (input[index] === '(') {
            bracket += 1;
        } else if (input[index] === ')') {
            bracket -= 1;
        }
        if (bracket < 0) {
            break;
        }
    }
    
    if (bracket != 0) {
        console.log('Incorrect');
    } else {
        console.log('Correct');
    }
}