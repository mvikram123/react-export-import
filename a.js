// let a=100;
// let b=100;
// module.exports={a,b};

//let x=9;
//export default x;// for single item

// for multiple item
//export let a=200;
//export let b=2;



//for single item

// console.log("file is starting...");
// let name="john";
// function display(){
//     console.log("hello",name);
// }
// console.log("file is ending ...");
// export default display;



//for multiple item
console.log("file is starting...");
let name="john";
export function display(){
    console.log("hello",name);
}
export function hello(){
    console.log("I am dancing");
}
console.log("file is ending ...");