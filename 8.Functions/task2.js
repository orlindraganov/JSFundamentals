function solve(params) {
var input = params[0].split(' ');
console.log(GetMaxOfThree(+input[0], +input[1], +input[2]));

    function GetMax(a, b) {
        return a > b ? a : b;
    }

    function GetMaxOfThree(a, b, c) {
        return a > GetMax(b, c) ? a : GetMax(b, c);
    }
}