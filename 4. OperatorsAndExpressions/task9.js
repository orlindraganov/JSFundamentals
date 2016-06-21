function solve(params) {
    var xCoord = params[0];
    var yCoord = params[1];

    var isInCircle = "outside circle ";
    var isInRect = "outside rectangle";

    var distFromCircleCenter = Math.sqrt(Math.pow(xCoord - 1, 2) + Math.pow(yCoord - 1, 2));
    if (distFromCircleCenter <= 1.5) {
        isInCircle = "inside circle ";
    }
    if (xCoord >= -1 && xCoord <= 5 && yCoord >= -1 && yCoord <= 1) {
        isInRect = "inside rectangle";
    }
    console.log(isInCircle + isInRect);
}