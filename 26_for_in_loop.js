// for-in loop

const myobj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in myobj) {
    console.log(key);
}
/* js
cpp
rb
*/

for (const key in myobj) {
    console.log(myobj[key]);
}
/* javascript
c++
ruby
*/

for (const key in myobj) {
    console.log(`${key} shortcut of ${myobj[key]}`);
}
/* js shortcut of javascript
cpp shortcut of c++
rb shortcut of ruby
*/

const programming = ["py", "cpp", "js", "rb"]
for (const key in programming) {
    console.log(key);
}
/* 0
1
2
3
*/


// map is not iteratable
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('IN', 'Indonasia')
for (const key in map) {
    console.log(key);
} // no output no error


