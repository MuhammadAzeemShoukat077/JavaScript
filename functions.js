//function add(a,b)
//{
//    return  a + b;
//}

//let result = add(10,10);
//console.log(result);

/*
//Arrow Function
//Program , accepts only positive values for addition.
let sum = (n,m)=>{
    if(n > 0 && m > 0){
        return n+m;
    }
    else if(n > 0 && m <0){
        console.log("Enter a positive integer to add!");
    }
    else{
        console.log("Enter a valid number for addition!");
    }
   
}
let addition = sum((-5),(-5));
console.log(addition);

*/


// let str = ["Hello", "World", "in", "a", "frame"];
// let arr = str;
// let maxLength = 0;
// for(let i =0; i < arr.Length; i++){
//     if(arr.length[i] > maxLength){
//         maxLength = arr.length[i];
//     }
// }
// console.log(maxLength);

function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  let str = "Hello world,script practic";
              let totalWords = countWords(str);
              let arr = str.split(' ');
              let maxLength = 0;
              for(let i = 0; i < arr.length; i++){
                  if( arr[i].length > maxLength){
                      maxLength = arr[i].length;
                  }
              }
              let cstr = '';
              for(let i = 0; i < (totalWords*3) + 1; i++){
                  cstr += '*';
              }
              console.log(cstr);
               let leftSpaces = cstr.length/3 + 1;
               
              for(let i = 0; i < arr.length; i++){
                  let lstr = '';
                  let rightSpaces = cstr.length - leftSpaces - arr[i].length-2;
                  let spaces = ' '.repeat(rightSpaces);
                  lstr += '*'+ ' '.repeat(leftSpaces) + arr[i]+ spaces +' *';
                  console.log(lstr);
              }
              console.log(cstr);