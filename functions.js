// functions are simply a block of code that you can you can use over and over again
// syntax or exapmle
function squared(num) {
    return num * num;
}

const squaredNumber = squared(10);
console.log(squaredNumber);


// declaring functions

// we use the function keyword to declare funvtioms in javascript
// sybtax 
// function functionname(parameter1,parameter2){

//}

// exapmle 
function greet(){
    console.log('helloworld')
}
greet()

function greetWorld(){
    console.log("Hello World!")
}
greetWorld()


function sumArray(myaArray=[]){
    sum = 0
    for(let i = 0; i < myaArray.length; i++){
        sum +=myaArray [i];
        

    }
   
    console.log(sum);
}
sumArray([1,2])

const greeting = function() {
    return 'Hello'; 
}();

// arrow functions
//syntax
const greet2 = ()=>{
    console.log('Hello2');
};
greet2()

const adding = (num)=>{
    return num+num
}

// the invoked functions expressions (IIEFs)
// this is s function expression that gets executed immediately when it is declared without having to call it
// syntax 
(function(){

})();

const greeting3 = function(){
    return 'hello4';

}();
console.log(greeting3)

// arrow fnctions
// syntax 
// (parameter1, parameter2)=>{

// }

const nice = ()=>{
    console.log("nice work!");
};
nice()

const summing = (num1,num2)=>{
    return num1+num2
};
console.log(summing(3,1))

// recursive functions
// is a function that calls its self within its code.
// example

function recursiveLoop(arr, index = 0) {
    if (index === arr.length) return;
    
    console.log(arr[index]);
    recursiveLoop(arr, index + 1);
}

const arr = [2, 5, 1, 5, 6];
recursiveLoop(arr);

function factorial(n){
    if (n===0 || n==1){
        return 1;
    }
    return n*factorial(n-1)

}
console.log(factorial(5));