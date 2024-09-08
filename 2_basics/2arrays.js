const marvelHero= ["thor","ironman","spiderman"]

const dc_heros=["superman","flash","batman"]

// marvelHero.push(dc_heros)

// console.log(marvelHero);
// console.log(marvelHero[3][1])

//  const allheros= marvelHero.concat(dc_heros)
// console.log(allheros);


const allnewheos= [...marvelHero,...dc_heros]
// console.log(allnewheos);

const anotherarray=[1,2,3,[4,5,6],[6,7,[4,5]]]

const real_anotherarray= anotherarray.flat(Infinity)
console.log(real_anotherarray);


console.log(Array.isArray('ganesh'))
console.log(Array.from("ganesh"))
console.log(Array.from({name:'ganesh'}))  //intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score1,score3))