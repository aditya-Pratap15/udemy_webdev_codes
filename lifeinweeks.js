function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var indays = age*365;
    var inweeks = age*52;
    var inmonths = age*12;
    
    console.log("You have "+((90*365)-indays)+" days, "+((90*52)-inweeks)+" weeks, and "+((90*12)-inmonths)+" months left.");
    
/*************Don't change the code below**********/
}
lifeInWeeks(56);
// or you can do this
var remainingyears = 90 - age;
var indays = remainingyears*365;
var inweeks = remainingyears*52;
var inmonths = remainingyears*12;
console.log("You have "+indays+" days, "+inweeks+" weeks, and "+inmonths+" months left.");
