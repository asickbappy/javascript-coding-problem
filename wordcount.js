var spech ="i am good person. i don't snore at night";
var count = 0;
for(var i=0; i<spech.length; i++){
var char = spech[i];
if(char == " "){
    count++;
}
}                            
count++;
console.log(count);