function solve(params) {
    var lastDigit = +params[0] % 10;
console.log(ConvertToWord(lastDigit));
    function ConvertToWord(params) {
        switch (params) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 0:
                return 'zero';
            default:
                break
        }
    }
}
