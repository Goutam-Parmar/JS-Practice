let score  =9
console.log(score)
console.log(typeof score)
// output : number

let anotherScore= "33"
console.log(anotherScore)
console.log(typeof(anotherScore))
//output: string

let run= "33aa"
console.log(run)
console.log(typeof(run))

let converted = Number(run)
console.log(typeof(converted))
//output : nummber ....but its not actully a number ...it is 33aa

//lets check 
console.log(converted)
//output : NaA(not a number) ....but its not actully a number ...it is 33aa
//and that is thee reasion typeSript comes in the picture

let a= null
console.log(a)
console.log(typeof(a))

let convert = Number(a)
console.log(typeof(convert))
//output : nummber ....but its not actully a number ...it is 33aa

//lets check 
console.log(convert)
//Again failed to convert
//output : 0 (not a number) ....but its not actully a number ...it is 33aa
//and that is thee reasion typeSript comes in the picture

let bool = 2
let change  = Boolean(bool)
console.log("boolen can convert   => "+typeof(bool))
//output : nummber ....but its not actully a number ...it is 33aa

//lets check 
console.log(change)
/*
Moral of the story 

"33" => 33
"33ab" => NaN
true +=> 1 , false => 0;
object => 0;

for BOOlean

1 => true;
0 => false
"" => false;
"dsfs" => true;
n>0 => all are converted into true;


*/