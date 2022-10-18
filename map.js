let map = new Map();

//Set is used to set a value, not to add a value.
//That's why we are not using add.
map.set('Azeem', 'Js');
map.set('Yahya','ROR');
map.set('Rohaan', 'react-native');
map.set('Faizan', 'Blockchain')
map.set('Azeem', 'React');


//by using for of loop.
//for(let [k,v] of map){
//    console.log(k,v);
//}

//by using forEach 
map.forEach((v,k) => {      //3-> things->vaule, index, set(map).
    console.log(v,":", k);    
});

