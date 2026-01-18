// for loop

for(let i=0; i<=10; i++){
    console.log(i);
}


for(let i=0; i<=10; i++){
    console.log(`Outer loop's value id ${i}`);
    
    for(let j = 0; j<= 10; j++){
        console.log(`Inner value is ${j} and outer value is ${i}`);
        
    }
}

for(let i=0; i<=10; i++){
    console.log(`Table of ${i} :- `);
    
    for(let j = 1; j<= 10; j++){
        console.log(`${i}*${j} = ${i*j}`);
        
    }
}


let myarray = ["marval", "DC", "Commic"]
for (let index = 0; index < myarray.length; index++) {
    console.log(myarray[index]);
}


// break, continue
for(let i=1; i<=10; i++){
    if(i == 5){
        console.log("5 is found");
        break;
    }
    console.log(`value of i is ${i}`);
}

for(let i=1; i<=10; i++){
    if(i == 5){
        console.log("5 is found");
        continue;
    }
    console.log(`value of i is ${i}`);
}








