    /*
    
    //Constructors in js.
    function Alian(name, tech){       //Alian is in capital, refers to object name.
        this.name = name;
        this.tech = tech;
        this.work = function(){
            console.log("Learning JavaScript");
        }
    }
    //alian1, alian2 and alian3, are 3-objects, of same function ,Alian
    //having different values, with same properties.
    let alian1 = new Alian('Azeem', 'JS');
    let alian2 = new Alian('Yahya', 'ROR');
    let alian3 = new Alian('Rohaan', 'React-native');

    console.log(alian1);
    alian1.tech = 'Node JS';
    console.log(alian1.tech);
    console.log(alian2.name);

    alian3.work();
    */



    /*

let fruits = new Array('Apple', 'Banana');

console.log(fruits.length);
console.log(fruits[0]);
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits1.copyWithin(2, 0, 3);
console.log(fruits1);
//Entries method  */
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();

for(let [k,v] of f){       //for of is always used to output the keys with values
    console.log(k,v);
}    




