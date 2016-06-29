function solve(params) {
    var arrSize = +params[0];

    var arr = new Array();
    for (var index = 0; index < arrSize; index+=1) {
        arr.push(index * 5);
        console.log(arr[index]);
   }
}