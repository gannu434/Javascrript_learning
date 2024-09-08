// immediately invoked  funtion expression (IIFe)


(function chai(){
    // named iffe
    console.log(`DB connected`);
})();

( (name)=>{
    console.log(`db connecte2 ${name}`);
})('ganesh')