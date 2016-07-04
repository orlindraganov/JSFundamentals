function solve(params) {
    var text = params,
        output = '',
        matchTags = /<.*?>/ig;
        
        for (var line of params) {
            output += line.replace(matchTags, '').trim();
        }

    console.log(output);
}