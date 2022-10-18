        /*
        let values = new Array();  //way to declare an array;
        Array = [1,2,3,4,5,6];
        console.log(Array);

        //Another way is:
        let value = [1,2,3,5,7,9];
        console.log(value);
        //how to print length of the array.
        //using a length method.
        console.log(value.length);

        //push and pop methods in arrays.

        Array.push(7,8,9,10);   //Adding elements at the end of array.
        console.log(Array);
        Array.pop();            //Remove an element at the end of array.
        console.log(Array);


        //Accessing Array elements using indexes.
        //Index always starts from 0.
        console.log(value[4]); //give value at 4th index.
        Array.splice(4,1);   //remove an element from an array at specific index
        //splice : using it, we can remove elements also we can add new elements.
        console.log(Array);
        

            //Popping an element in array like object
            /*
                const myFish = {
                    0: 'angel',
                    1: 'clown',
                    2: 'mandarin',
                    3: 'sturgeon',
                    length: 4,  
            };

            //using a call. 
            let popped = Array.prototype.pop.call(myFish);
            console.log(myFish);
            console.log(popped);    

            //merging two arrays.   
            // Array and value are merged.
            //{(...)//just like a key word, means all values from array}.
            Array.push(...value, 10,11);
            console.log(Array);



            //Different types of data in an array.
            let data =['Azeem',21,{tech: 'js'},function(){
                console.log("Hello World!"); 
            }];

            console.log(data);
            data[3]();


            //Shift and unshift
            console.log(Array.shift()); //will shift one value towards left
            //removes element from the start of array.
            console.log(Array);
            Array.unshift(1);
            console.log(Array);
*/




/*
            //Array Destructring
            let words = 'Hello!, Its a string'.split(' ');

            let [a,b,...d] = words;

            console.log(a,b,d);

            //swapping values using array destructring.
            let i =5;
            let j =9;

            [i,j] = [j,i];
            console.log(i,j);


            //Array methods, filter, map, reduce.

            let array = [12,33,24,43,53,35,69,90.79,80,77,88];

          let result =  array.filter( n => n%2===0).map(n=> n*2)
           // .forEach(n=>{
             //   console.log(n);});
             .reduce((a,b)=>a+b);
            console.log(result);
            
            

            let fruits = ['Apple','Orange','Mango', 'Banana']   //array.join method returns the string from an array
            console.log(fruits.join( " "));

            //Using built in object keys , to iterate the array and find keys
            const fruit = ["Banana", "Orange", "Apple", "Mango"];
            const keys = Object.keys(fruit);
            
            for(let k of keys){//for of is always used to output the keys with values
                console.log(k);
            } 

            //lastIndexOf  returns the last index of specified index 
            let index = fruits.lastIndexOf('Mango');
            console.log(index);


            //map() 
            
            let array = [12,33,24,43,53,35,69,90.79,80,77,88];

          let result =  array.map(n=> n*2)

         // array.forEach(n => {
                  
          //});
          console.log(result);   

*/
          
//Create a method that transforms array values into upper case:

Array.prototype.upperCase = function(){
    for(let i = 0; i< this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}
let fruits = ['Apple','Orange','Mango', 'Banana'];
fruits.upperCase();
console.log(fruits);






