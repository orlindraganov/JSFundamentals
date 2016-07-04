function solve(params) {
    var input = String(params);

    var output = '';

    for (var index = input.length - 1; index >= 0; index -= 1) {
        output += input[index];
    }

    console.log(output);
}