/*Printing even numbers between zero and twenty.
for(let i =0; i<=20; i+=2){
    console.log(i);
}

//Printing odd numbers between 0 and 20.
for(let i = 1; i<=20; i+=2){
    console.log(i);
}

*/



/*Table of any number using for loop

let x =8;
let max = 10;
console.log("Table of 8 is:");
for(let i =1; i<=max; i++){
  //  if(i==7){
  //    break;
  // }
  //  if(i==2){
  //      continue;
   // }
    
  console.log(x + "*" + i +"=" , x*i);
}  

*/


//sum of natural numbers(1-10)
//let sum = 0;
//for(let i = 0; i<10; i++){
//    sum = sum + i;
//}
//console.log("sum of natural numbers: " + sum);





/*For loop with array, find the odd and even numbers.
let arr = [1,2,3,45,43,22,56,77,87,95,90];
let evenArr = [];
let oddArr = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i] %2 == 1){
        evenArr.push(arr[i]);
    }
    else{
        oddArr.push(arr[i]);
    }
}

console.log("Even Numbers: " + evenArr);
console.log("Odd Numbers: " + oddArr);

*/

//finding missing number in an array
//let Arr = [101,103,104,105,107,109,110];
/*
function missArray(Arr){    
let newArr = [];

let min = Math.min(...Arr);
let max = Math.max(...Arr);

for(k = min; k<max; k++){
    if(Arr.indexOf(k)<0){
        newArr.push(k);
    }
}
 return newArr;
}

console.log("Missing Elements: " + missArray([101,102,103,105,109,111]));





//for of and for in
let nums = [];
nums[0] = 5;
nums[99] = 10;
//one way to fetch values.
//console.log(nums);
//another way is by using for of loop.
for(let n of nums){    //for of giving values of nums at their indexes, and n stores value one by one.
    console.log(n);
}

//for in loop.
for(let key in nums){   //for in gives the keys,of array.
    console.log(nums[key]); //getting stored values at these keys.
}

*/


//forEach loop
//let numb = [1,3,5,7,9];

//numb.forEach((n, i, numb)=>{
//    console.log(n,i, numb);
//});

let nums = new Set();
nums.add(1);
nums.add(2);
nums.add(1);
nums.add(3);
nums.add('Azeem');
nums.add('Shoukat');

for(let word of nums){
    console.log(word);
   }

   console.log(nums.has(3));   //has method is used for checking some value.






/*
let sum = 0;
let SUM = 0;
for(let i = 0; i<Arr.length; i++){
    sum = sum+i;    
}
//console.log("Sum is = "+sum);

//Getting sum of array elements.
for(let j = 0; j<Arr.length; j++){
    SUM = SUM+Arr[j];
}
//console.log("Sum of array element = " + SUM);

missingNo = SUM - sum;
console.log("Missing element= " + missingNo);
*/


/*
//Min and max number
let min = Arr[0];
for(let i = 0; i< Arr.length; i++){
    if(Arr[i]<min){
        min = Arr[i];
    }
}
console.log(min);


*/
