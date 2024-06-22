prompt("enter your name");
prompt("enter your partner name");
var lovescore = Math.random();
lovescore = Math.floor(lovescore * 100) +1 ;
if(lovescore > 700){
   alert("you love each other with "+lovescore+"% score");
}else{
  alert("you do not love each other with "+lovescore+"% score");
}
