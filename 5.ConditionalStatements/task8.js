function solve(params) {
    var number = +params[0];

    String.prototype.sentenceCase = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    var ones;
    var tens;
    var hundreds;

    var numberAsWord;

    var onesAsWord = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tensAsWord = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function NumToWordToNinetyNine() {
        if (0 < number && number < 20) {
            numberAsWord = onesAsWord[number];
            return numberAsWord;
        } else if (20 <= number && number < 100) {
            numberAsWord = tensAsWord[tens] + ' ' + onesAsWord[ones];
            return numberAsWord;
        }
    }

    if (number === 0) {
        numberAsWord = 'Zero';
    }
    else if (number < 100) {
        ones = number % 10;
        tens = ((number / 10) | 0) % 10;
        numberAsWord = NumToWordToNinetyNine();
    } else {
        ones = number % 10;
        tens = ((number / 10) | 0) % 10;
        hundreds = ((number / 100) | 0) % 10;
        
        numberAsWord = NumToWordToNinetyNine();
        numberAsWord = onesAsWord[hundreds] + ' hundred and ' + numberAsWord;
    }

    console.log(numberAsWord.sentenceCase());
}