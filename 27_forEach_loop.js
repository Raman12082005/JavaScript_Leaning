const coding = ["js", "ruby", "java", "python", "cpp"]

// how to use function inside foreach loop 
coding.forEach( function (item) {
    console.log(item); 
} )
/*
js
ruby
java
python
cpp
*/

// how to use arrow function inside foreach loop
coding.forEach( (item) => {
    console.log(item);
} )
/*
js
ruby
java
python
cpp
*/

// how to print elements of an array using a function call
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
/*
js
ruby
java
python
cpp
*/


// what parameters does arrow function take inside forEach loop
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


// [ {}, {}, {} ] -> how to asscess objects inside a array
const myCoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "python",
        languagefilename : "ph"
    },
    {
        languagename : "Cpp",
        languagefilename : "c++"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languagename);
})
/*
javascript
python
Cpp
*/

myCoding.forEach( (item) => {
    console.log(item);
})
/*
{ languagename: 'javascript', languagefilename: 'js' }
{ languagename: 'python', languagefilename: 'ph' }
{ languagename: 'Cpp', languagefilename: 'c++' }
 */




