let root=require("../root.js");
let problem4 =require("../problem4.js");

let inv=root.inventory;
let arr=problem4(inv);
for(let i=0;i<arr.length;i++)
{
    console.log (arr[i]);
}