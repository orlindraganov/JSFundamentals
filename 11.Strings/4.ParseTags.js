function solve(params) {
    const upOpen = 'upcase',
        upClose = '/upcase',
        lowOpen = 'lowcase',
        lowClose = '/lowcase',
        orgOpen = 'orgcase',
        orgClose = '/orgcase',
        upScope = 'up',
        lowScope = 'low',
        orgScope = 'org';

    let isTag = false,
        scopeStack = [],
        currentScope = orgScope,
        text = params[0],
        length = text.length,
        currentTag = '',
        output = '';

    for (var index = 0; index < length; index += 1) {
        let c = text[index] + '';

        if (c === '<') {
            isTag = true;
        } else if (c === '>') {
            isTag = false;

            if (currentTag === upOpen) {
                scopeStack.push(currentScope);
                currentScope = upScope;
            } else if (currentTag === lowOpen) {
                scopeStack.push(currentScope);
                currentScope = lowScope;
            } else if (currentTag === orgOpen) {
                scopeStack.push(currentScope);
                currentScope = orgScope;
            } else if (currentTag === upClose) {
                currentScope = scopeStack.pop();
            } else if (currentTag === lowClose) {
                currentScope = scopeStack.pop();
            } else if (currentTag === orgClose) {
                currentScope = scopeStack.pop();
            } else {
                output += currentTag;
            }
            currentTag = '';
        } else if (isTag) {
            currentTag += c;
        } else if (!isTag) {
            if (currentScope === upScope) {
                output += c.toUpperCase();
            } else if (currentScope === lowScope) {
                output += c.toLowerCase();
            } else {
                output += c;
            }
        }
    } 
    console.log(output);
}