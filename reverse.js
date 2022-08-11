function reverseString(str){
    var reverse = "";
    for(var i=0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement ="hello world hi iam jack smith. i am going to mongol groho"
var forAlien = reverseString(statement);
console.log(forAlien);



var foodVlog = reverseString("icecream khabo");
console.log(foodVlog);