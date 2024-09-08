
// var c=30
let a=200

// scope ke andar ki value bahar nahi jana cahiye
if(true){let a=10
const b=2
// console.log("inner:",a);


}

// console.log(a);
// console.log(b)
// console.log(c);


function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);

    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username="ganesh"
    if(username==="ganesh"){
        const website='youtube'
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);



// ****************************intresting*************

console.log(addOne(5))
function addOne(num){
return num+1
}

// addOne(5)

// addtwo(5)
const addtwo= function(num){
    return num+2
}

console.log(addtwo(5))

