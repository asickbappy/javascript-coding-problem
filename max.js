var business = 850;
var minister = 650;
var sochib = 950;

var max = Math.max(business, minister, sochib);
console.log(max);


var business = 850;
var minister = 650;
var sochib = 950;
if(business > minister){
if(business > sochib){
    console.log("business is biger");
}
else{
    console.log("sochib is bigger")
}

}
else{
    if(minister > sochib){
console.log("minister is bigger");
    }
    else{
        console.log("sochib is bigger")
    }
}