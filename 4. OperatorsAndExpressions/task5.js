function solve(args) {
    var num = +args;
    var result = (num >> 3) & 1;
    console.log(result);
}