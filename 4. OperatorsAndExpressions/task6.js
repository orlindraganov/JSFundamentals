function solve(params) {
    var xCoord = +params[0];
    var yCoord = +params[1];

    var dist = Math.sqrt(xCoord * xCoord + yCoord * yCoord);
    
    if (dist <= 2) {
        console.log("yes " + dist.toFixed(2));
    } else {
        console.log("no " + dist.toFixed(2));
    }
}