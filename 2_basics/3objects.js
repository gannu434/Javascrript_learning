// singleton


// object literals

const mysym= Symbol("key1")

const jsuser={
    name:"ganesh",
'full name': "ganesh jauk",
[mysym]:"mykey1",
    age:21,
    location:"aurangabad",
    email:"ganesh@google.com",
    isloggedin:false,
    lastlogindays:['mmonday','sunday']
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log( jsuser [mysym])


jsuser.email="hitesh@chatgtp.com"
// Object.freeze(jsuser)
jsuser.emial ="ganesh@ms.com"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");

}

jsuser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
