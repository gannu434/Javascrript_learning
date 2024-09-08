const mynum=[1,2,4]

// const mytotal=mynum.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval
// },0)

const mytotal=mynum.reduce((acc,curval)=>acc+curval,0)

console.log(mytotal);


const shoppingcart=[
    {
        item:'js course',
        price:2999
    },
    {
        item:'python',
        price:499
    },
    {
        item:'c+',
        price:5999
    },
    {
        item:' web course',
        price:7999
    },
    {
        item:'js course',
        price:2999
    },
]

const price=shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(price);