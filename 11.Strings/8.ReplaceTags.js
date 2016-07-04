function solve(params) {
    var input = params[0],
        output = '',
        openTagBegin = '<a href="',
        opentTagEnd = '">',
        closeTag = '</a>',
        outputOpenTagBegin = '[',
        outputOpenTagEnd = '](',
        outputCloseTag = ')',
        currentIndex = 0;

    while (input.indexOf(closeTag) != -1) {
        currentIndex = input.indexOf(openTagBegin);

        output += input.substring(0, currentIndex);
        output += outputOpenTagBegin;
        
        input = input.slice(currentIndex);

        output += input.substring(input.indexOf(opentTagEnd) + opentTagEnd.length, input.indexOf(closeTag));
        output += outputOpenTagEnd;

        output += input.substring(input.indexOf(openTagBegin) + openTagBegin.length, input.indexOf(opentTagEnd));
        output += outputCloseTag;

        input = input.slice(input.indexOf(closeTag) + closeTag.length);
    }
    output += input;
    console.log(output);
}