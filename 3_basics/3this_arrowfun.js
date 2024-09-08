const user={
    username:'ganesh',
    price: 999,


    welcomeMassage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username ="ganesh"
// console.log(this);
// }

// chai()


// const chai =function(){
//     let username ="ganehs"
//     console.log(this.username)
// }

// chai()


const chai =() => {
    let username ="ganehs"
    console.log(this)
}

// chai()

// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(4,3))


// const addTwo=(num1,num2) =>  num1+num2

// const addTwo=(num1,num2) => (num1+num2)
const addTwo=(num1,num2) =>({username : 'ganesh'})


console.log(addTwo(4,3))



// const myarray=[1,2,3,4,5]
// myarray.forEach()

