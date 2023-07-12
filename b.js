// let {a,b}=require('./a.js');
// console.log(a,b);



//another method
//import x  from './a.js';
//console.log(x);

//for multiple item
//import {a,b} from './a.js';
//console.log(a,b);



import {display,hello} from './a.js';  // or import * as obj from './.a.js'
display();                              // or obj.display();
                                        //or obj.hello();
hello();