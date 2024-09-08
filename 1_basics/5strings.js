const name = "ganesh"
const repoCount = 100

// console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${ repoCount}`);

const gameName = new String('ganesh-hc')

// console.log(ganmeName[0]);
// console.log(ganeName._proto_.);


// console.log(gamename.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString );

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://ganesh.com?ganesh%20jauk"

console.log(url.replace('%20','-'))

// url.includes('ganesh');
console.log(url.includes('ganesh'))

console.log(gameName.split('-'));


