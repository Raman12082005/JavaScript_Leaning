const userEmail = "Manav@gmail.com"

if(userEmail){
    console.log("User has Email");
}else{
    console.log("User doesn't have Email");
} // User has Email


let UserEmail; // undefined value

if(UserEmail){
    console.log("User has Email");
}else{
    console.log("User doesn't have Email");
} // User doesn't have Email

/* falsy values :-
false, 0, -0, BigInt 0n, "", null, undefined, NaN

imp:-
false === 0
false === ''
false === ""
0 === ''
0 === ""
*/

/* truthy values :-
"0" -> zero inside string, 'false, "false", " ", [], {}, function(){}

imp:-
false == 0 -> true
false == ''
false == ""
0 == ''
0 == ""
*/

let Rollnos = []
if(Rollnos.length == 0){
    console.log("Array is Empty");
} // Array is Empty


const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
} // Object is empty


// Nullish Coalescing Operator '??' -> used for null & undefined values 
let val1 ;
val1 = 5 ?? 10
console.log(val1); // 5

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 15
console.log(val1); // 15

val1 = undefined ?? 25 ?? null ?? 30
console.log(val1); // 25


// Terniary Operator -> it is different from NullCoalescing Operator
// condition ? true : false

const coldcoffee = 100
coldcoffee <=80 ? console.log("Less than 100") : console.log("more than 80");
// more than 80

