let root=require("../root.js");
let problem6=require("../problem6.js");

let inv=root.inventory;
let audi_bmw_arr=problem6(inv);
let json_arr=JSON.stringify(audi_bmw_arr,null,2);
console.log(json_arr);