// const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);


const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ganesh",
            lastnamae:"jauk"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4
}
// console.log(obj3);

const user=[
{
    id:1,
    email:"h@gmail.com",
},
{
    id:1,
    email:"h@gmail.com",
}

]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course={
    coursrname:'jsinhindi',
    price:'999',
    courseInstructor:"hitesh",

}

// course.courseInstructor
const {courseInstructor:instrustor}=course
// console.log(courseInstructor);

console.log(instrustor);


// {
//     name:'hitesh',
//     coursrname:"js in hindi",
//     price:"free"
// }

[
    {},
    {},
    {}
]