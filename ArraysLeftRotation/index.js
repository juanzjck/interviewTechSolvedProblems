
function rotLeft(a, d) {
    // Write your code here

   const rotatedArray = a;
   for(let i=0;i<d;i++){
    let frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
   }

  
   return rotatedArray 
   
}

console.log(rotLeft([1,2,3,4,5], 4))