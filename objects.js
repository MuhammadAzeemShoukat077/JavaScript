        /*
    when we create an object there are two things, 
    1-> object have some properties.
    2-> object has some behavior, and this behavior is known as 
        method in js.
        
        let Folks = {
            name : 'Azeem',
            Age : 21,
            'work exp': 4,
            //object into an object
            university: {                
            address: 'comsats Lahore',
            City : 'lahore',
            }
        };

        console.log(Folks.name,Folks.Age); //using dot to fetch
        console.log(Folks['work exp']); //using brackets [].

        console.log(Folks.name, Folks.university.City);

        //can we delete any property ? yes.
        //delete Folks.university.City
        //console.log(Folks);             //city has been deleted.

        //use of for in loop.
        for(let key in Folks){
            //console.log(key);  //prints only the keys of object Folks.
            //console.log(key,Folks[key]); //gives the values of object Folks
        // console.log(key, Folks.university[key]);   //gives the values of object university only.
            let data=Folks[key].address?Folks[key].address:Folks[key] ;
            console.log(data);  //how to fetch keys and values for object university

        }


        

        //Adding object + function.
        let Laptop = {
            cpu : 'i5',
            ram : 16,
            brand : 'DELL',

            greet: function(){
                console.log("Hello Alians!");
            }
        }

    //we've created a function inside a object , so we will use objec
    //name with dot to access that function.
    Laptop.greet();
    console.log(Laptop.cpu, Laptop.ram, Laptop.brand);
*/

// let laptop1 = {
//     cpu:'i9',
//     ram : 16,
//     brand : 'HP',

//     compare : function(other){
//         if(this.cpu > other.cpu){
//             console.log(this);
//         }
//         else{
//             console.log(other);
//         }
//     },

//     getconfig : function(){
//         console.log(this.cpu);
//     }
// }
// //laptop1.getconfig();

// let laptop2 = {
//     cpu : 'i7',
//     ram : 16,
//     brand : 'Dell',

//     getconfig:function(){
//         console.log(this.cpu,this.ram, this.brand);
//     }
// }
// //laptop2.getconfig();

// laptop1.compare(laptop2);


let programming = {
    languages : ['java','javscript', 'React'],
    isChallenging : true,
    isRewarding : 'yes',
    difficultyLevel: 10, 
    jokes: 'abjsiaiufhsjiohi'
}
//Adding 4th language at the end of array.
// console.log(programming.languages);
// programming.languages.push('GO');
// console.log(programming.languages);
// //Change the difficulty level =7;
// programming.difficultyLevel = 10-3;
// console.log("Difficulty level = " +programming.difficultyLevel);
// //Delete the key -->Jokes 
// delete programming.jokes;
// console.log(programming);
// //Add new value to programming object.
// programming.isFun =true;
// console.log(programming);
//Printing all languages of array 
// for(let v of programming.languages){
//     console.log(v);
// }
// //console all keys of object
// for(let k in programming){
//     console.log(k);
// }
//console all values of an object.
for(let val in programming){
    console.log(programming[val]);
}
