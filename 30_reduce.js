// reduce

const mynums = [1, 2, 3, 4]

const mytotal = mynums.reduce(function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`);
    
    return acc + currval;
}, 3)
console.log(mytotal);
/*
acc: 3, currval: 1
acc: 4, currval: 2
acc: 6, currval: 3
acc: 9, currval: 4
13
*/

const Mytotal = mynums.reduce( (acc, currval) => acc + currval, 0 )
console.log(Mytotal); // 10


const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 12999
    },
    {
        itemName: "data science course",
        price: 9999
    },
]

const pricetopay = shoppingcart.reduce( (acc, item) => acc + item.price, 0 )
console.log(pricetopay); // 26996




