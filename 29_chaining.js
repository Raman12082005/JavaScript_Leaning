const mynums = [ 1, 2, 3, 4,5 ,6 ]

let value = mynums.map( (num)=> num + 10 )
console.log(value); // [ 11, 12, 13, 14, 15, 16 ]

value = mynums.map( (num)=> { return num + 10} )
console.log(value); // [ 11, 12, 13, 14, 15, 16 ]



// chaining

value = mynums.filter( (it) => {
    return it;
} )
console.log(value); // [ 1, 2, 3, 4, 5, 6 ]

const newnums = mynums
                .map( (item) => item * 10 )
                .map( (item) => item + 2 )
console.log(newnums); // [ 12, 22, 32, 42, 52, 62 ]


const newNums = mynums
                .map( (item) => item * 10 )
                .map( (item) => item + 2 )
                .filter( (item)=> item > 40 )
console.log(newNums); // [ 42, 52, 62 ]






