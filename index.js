        //console.log("First Day");

        /*Values and variables
        -->Variable name must be start with a letter,
        --> it may start with underscore.
        -->It can't start with the number & can't use special character.*/
        var $myName = 'Alpha';
        console.log($myName);
        var myAge = 20;        //camelCase----->myAge
        console.log(myAge);

        //Data Types in JavaScript.
        //How to check variable type?
        var myClass = 'Computer Science';
        console.log(typeof(myClass));
        console.log(myClass);

        console.log(9 + '20'); //string Concatination 

        let myAnswer = 2022;
        myAnswer = 'Thanks for the tea.'; //automatically type conversion, by changung value.
        console.log(myAnswer);

        //True = 1 & False = 0.
        console.log(true + false);
        console.log(false + false);
        console.log(false- true);
        console.log(true + true);


        // Not a mumber(NaN)
        console.log(NaN === NaN)
        console.log(isNaN(NaN));
        console.log(isNaN(Number.NaN));
        console.log(Number.isNaN(NaN));

        //Increment operator, postfix.
        //var num = 5;
        //var newNum = num++ +10;
        //console.log(num);
        //console.log(newNum);

        //increment operator, prefix
        //var num = 10;
        //var newNum = ++num + 5;
        //console.log(num);
        //console.log(newNum);


            //decrement operator, Postfix
        // var num = 90;
        // var newNum = num-- + 10;
        // console.log(num);
        // console.log(newNum);

        //decrement operator, prefix.
        //var num= 45;
        //var newNum = --num + 10;
        //console.log(num);
        //console.log(newNum);

        //Comparison Operator (retrun boolean values)
        //var a =10;
        //var b =20;
        //console.log(a!=b);
        //greater / greater than and equal to.
        //console.log(a>b);
        //console.log(a>=b);
        //lesser/ lesser than equal to.
        //console.log(a<b);
        // console.log(a<=b);

        //Logical AND,OR, NOT operators.
        //console.log(a>b && b>0);//AND OPERATOR
        // console.log(a<b || b<a);//OR OPERATOR
        // console.log(!(a>b));


            //String operator
            //Concatination
            //let newStr = 'Hello';
        // console.log(newStr + ' Azeem');


            console.log(3**3); //just like the Cube of 3
        /*
            let a = 20;
            let b = 90;

            let temp;
            temp = b;
            b = a;
            a = temp;

            console.log("value of a" + a);
            console.log("value of b" + b);


        

            let a = 10;
            let b = 5;

            a = a + b;
            b = a - b;
            a = a - b;

            console.log("value of a after swapping: " + a);
            
            console.log("value of b after swapping: " + b);

    */


    /* Difference between == and === 
    let a = 5;
    let b = '5';

    console.log(a == b);
    console.log(a === b);  //'5' is of string type.
    */

    //Check the given year is leap year or not.
    /*
    let year = 2020;
    if(year%4===0 ){
        if(year% 100 === 0){
            if(year % 400 === 0){
                console.log("The given is a leap year!");
            }
            else{
                console.log("This is not a leap year!");
            }

        }else{
            console.log("The year is a leap year.");
        }
    
    }
    else{
        console.log("Given year is not a leap year!");
    }


    */

    // Ternary operator
    //let age =20;
    //console.log((age>=18)? "eligible": "not-eligible");

    let x =8;
    let max = 10;
    console.log("Table of 8 is:");
    //for(let i =1; i<=max; i++){
    //  console.log(x + "*" + i +"=" , x*i);
    //}
    //using while loop
    let i = 1;
    //while(i<=max){
    //  console.log(x + "*" + i +"=" , x*i);
    // i++;
    //}


    //using do-while loop
    do{
        console.log(x + "*" + i +"=" , x*i);
        i++;
    }while(i<=max);












