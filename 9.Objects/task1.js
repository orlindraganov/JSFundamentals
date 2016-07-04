function solve(params) {
    var coords = params.map(Number);
    var lines = [];

    for (var index = 0; index < coords.length; index += 4) {
        lines.push({
            firstPoint: [lines[index], lines[index + 1]],
            secondPoint: [lines[index + 2], lines[index + 3]]
        });
    }

    var lengths = [];

    for (var index = 0; index < lines.length; index++) {
        lengths.push(calculateLength(lines[index]));
        console.log(lengths[index].toFixed(2));
    }
   
    if (checkTriangle(lengths)) {
        console.log("Triangle can be built");
    } else {
        console.log("Triangle can not be built");
    }

    function calculateLength(line) {
        var x = Math.abs(line.firstPoint[0] - line.secondPoint[0]);
        var y = Math.abs(line.firstPoint[1] - line.secondPoint[1]);

        return Math.sqrt(x * x + y * y);
    }

    function checkTriangle(lengths) {
        if ((lengths[0] + lengths[1]> lengths[2]) &&
            (lengths[1] + lengths[2] > lengths[0]) &&
            (lengths[0] + lengths[2] > lengths[1])) {
            return true;
        } else {
            return false;
        }
    }
}