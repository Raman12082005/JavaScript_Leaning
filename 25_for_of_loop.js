// for-of loop

// ["", "", ""] -> string in array
// [{}. {}, {}] -> object in array

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " ") continue
    console.log(`each char is ${greet}`);
}
/* each char is H
each char is e
each char is l
each char is l
each char is o
each char is W
each char is o
each char is r
each char is l
each char is d
*/



// Maps

let map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('IN', 'India')
console.log(map);
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United State of America',
  'FR' => 'France'
   } 
*/

map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('IN', 'Indonasia')
console.log(map);
/* Map(3) {
  'IN' => 'Indonasia',
  'USA' => 'United State of America',
  'FR' => 'France'
   }
} */

for (const key of map) {
    console.log(key);
}
/* [ 'IN', 'Indonasia' ]
[ 'USA', 'United State of America' ]
[ 'FR', 'France' ]
*/

for (const [key, value] of map) {
    console.log(key);
}
/* IN
USA
FR
*/


const myobj = {
    'game1' : 'COC',
    'game2' : 'PUBG'
}
for (const [key, value] of myobj) {
    console.log(key, '->', value);
} // TypeError: myobj is not iterable







