function solve(params) {
    var num = +params[0];
    var limit = Math.sqrt(num);
    var isPrime = true;

    if (num <= 0 || num === 1) {
        isPrime = false
    } else {
        for (var index = 2; index <= limit; index += 1) {
            if (num % index === 0) {
                isPrime = false;
                break;
            }
        }
    } 
    console.log(isPrime);
}