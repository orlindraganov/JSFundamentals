function solve(params) {
    var num = +params[0];
    var temp = 1;
    var output = '';

    for (var i = 0; i < num; i++) {
        temp = i + 1;
        for (var j = 0; j < num; j++) {
            output = output.concat(temp.toString(), ' ');
            temp += 1;
        }
        console.log(output.trim(' '));
        output = '';
    }
}