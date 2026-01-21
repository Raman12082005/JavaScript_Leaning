const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (items) => {
    console.log(items);
} )
/*
js
ruby
java
python
cpp
*/

const value = coding.forEach( (items) => {
    // console.log(items);
    return items;
} )
console.log(value); // undefined


const mynums = [1, 2, 3, 4, 5, 6]
let newnums = mynums.filter( (num) => num > 4 )
console.log(newnums); // [ 5, 6 ]

newnums = mynums.filter( (num) => { // when you apply curly brackets then you started scope
                                    // than you have to use return to return somthing
    return num > 4;
} )
console.log(newnums); // [ 5, 6 ]


const newNums = []
mynums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )
console.log(newNums); // [ 5, 6 ]






