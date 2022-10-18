let x = 9;
let y = 2;
let z = -8;

/*

if(x>0 && y>0 && z>0){
    console.log("Sign is +");
}
else if(x>0 && y>0 && z<0){
    console.log("sign is -");
}
else if(x > 0 && y < 0 && z < 0){
    console.log("Sign is +");
}
else if(x < 0 && y > 0 && z < 0){
    console.log("Sign is +");
}
else if(x<0 && y<0 && z>0){
    console.log("Sign is +");
}
else{
    console.log("Sign is -");
}
*/
let product;
product = x * y * z;
console.log(`Product of ${x}, ${y} and ${z} is= ${product}`);
if(product> 0){
    console.log("Sign of product is +");
}
else{
    console.log("Sign of Product is -");
}
