const email=[]

if (email){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

// {
// false values 
// false,0,-0,bigint 0n,"",null,undefined,NAN
// } all known as false vaues


// truthy values,
// "0",'false'," ",[],{},funtion(){},


// if(email.length===0){
// console.log("array is empty")
// }

// const emptyobj={}

// if(Object.keys(emptyobj).length===0){
// console.log("object is empty")
// }

// nulish coalescing operator(??): null undefined

// let val1;
// val1=4??10
// val1=null??10
// val1 =undefined??55
val1=null??10??20



console.log(val1);

// terniary operator

condition ? true:false
const iceteaprice=100
iceteaprice<=80? console.log("less than 80"):console.log("more than 80")

