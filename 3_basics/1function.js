


function sayMyName(){
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}

// sayMyName()

// function addTwoNumber(number1,number2){

//     console.log(number1+number2)
// }
function addTwoNumber(number1,number2){

    // let result=number1+number2
    // return result

    return number1+number2

}

const result=addTwoNumber(2,5);

// console.log("result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter the username")
        return
    }
    return`${username}  just logged in`
}

// console.log(loginUserMessage("ganesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1,val2,...num1){
    return num1

}

// console.log(calculateCartPrice(200,300,400,300));

const user={
    username:"hitesh",
    prices:200

}


function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleobject(user)
handleobject(
    {
        username:"ganesh",
        price:789
    }
)

const myNewarray=[100,200,300,400]

function returnArrayvalue(getArray){
    return getArray[1]
}

// console.log(returnArrayvalue(myNewarray));
console.log(returnArrayvalue([200,300,4000]));