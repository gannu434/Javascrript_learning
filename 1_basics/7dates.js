// dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedate= new Date(2023,0,23 ,5,5)

// let myCreatedate=new Date("23-01-14")

let myCreatedate = new Date("01-14-2023")
// console.log(myCreatedate.toLocaleDateString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/100));


let newDate =new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


// ${newDate.getDate()}and the TimeRanges

newDate.toLocaleString('default',{
    weekday:"short",

});