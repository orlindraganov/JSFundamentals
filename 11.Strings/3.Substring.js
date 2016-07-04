function solve(params) {
    var search = new RegExp(params[0], "gi");
    var input = String(params[1]);
    var result = input.match(search);
    console.log(result.length);
}