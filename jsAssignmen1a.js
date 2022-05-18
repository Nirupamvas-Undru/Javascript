function myFirstFunction(a, b){
    return a+b;
}
function mySecondFunction(myFirstFunction, first, second){
    return myFirstFunction(first, second);
}
console.log(mySecondFunction(myFirstFunction, 10,20));
