const { element } = require("prop-types")

let test1 = "{([])}"
let test2 = "{([])}[]{}()"
let test3 = "{([])}[]{(})"
const dic = {
    "{":"}",
    "(":")",
    "[":"]",
    "<":">",
}

function isOpen(item){
    return ["{","(","[","<"].includes(item)
}

function isClose(item,element){
   
    return dic[item]==element
}

function formatValidation(str){
    // diccionary of open and close 
   
    let arr=[]
    for(const element of str.split('')){
        if(isOpen(element)){
            arr.push(element)
        }else{
            let item = arr.pop()
            if(!isClose(item,element))return false
        }
    }


    return arr.length==0
}
console.log(formatValidation(test1));

console.log(formatValidation(test2));

console.log(formatValidation(test3));