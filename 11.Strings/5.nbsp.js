function solve(params) {
    let text = params[0],
        searchTerm = new RegExp("\\s","g"),
        replace = '&nbsp;';

    let result = text.replace(searchTerm, replace);

    console.log(result);
}