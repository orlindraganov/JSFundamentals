function solve(params) {
    var firstSide = +params[0];
    var secondSide = +params[1];
    var height = +params[2];

    var area = (firstSide + secondSide) * height / 2;

    console.log(area.toFixed(7));
}