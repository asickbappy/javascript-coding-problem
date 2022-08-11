var marks = [34, 56, 57, 89, 60, 99];
var max = marks[0];
for(var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("highest value is: ", max);