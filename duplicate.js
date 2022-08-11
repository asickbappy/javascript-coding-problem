var number = [3, 5, 6, 3, 7, 6, 5, 9, 7];
var uniqueNumber = [];
for(var i=0; i<number.length; i++){
    var element = number[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);