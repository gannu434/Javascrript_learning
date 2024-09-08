// const coding=['js','c++','py','ruby']


// const values =coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnums= mynums.filter((num)=>{
//     return num>4
// })


// const newnums=[]

// mynums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


const books=[
    {
        title:'book one ',genere:'friction',publish:1981,
        edition:2004
    },
    {
        title:'book two ',genere:'non friction',publish:1988,
        edition:2005
    },
    {
        title:'book three ',genere:'history',publish:2002,
        edition:2006
    },
    {
        title:'book four ',genere:'science',publish:2003,
        edition:2009
    },
    {
        title:'book five ',genere:'geographhy',publish:2004,
        edition:1009
    },
];

let userbooks=books.filter((bk)=> bk.genere==='history')


userbooks=books.filter((bk)=>{
    return bk.publish >=2000 && bk.genere==='history'
})
console.log(userbooks);