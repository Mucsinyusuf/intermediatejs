// // You are given two arrays arr1 and arr2. Your job is to find 
// the union of these two arrays. For example, the union of [1, 2, 3] 
// and [100, 2, 1, 10] is [1, 2, 3, 100, 10]. Basically, 
// your job is to create a new third array and store every different number from both arrays.
//  Make sure not to have duplicates. Looping through arrays and using 
//  the .includes() method might help you.


let array1 = [1, 2, 3];
let array2= [100, 2, 1, 10];
let array3=[];

for (let x = 0; x < array1.length; x++) {
    if (!array3.includes(array1[x])) {
        array3.push(array1[x]);
    }

}
for (let j = 0; j < array2.length; j++) {
    if (!array3.includes(array2[j])) {
        array3.push(array2[j]);
    }
}

console.log(array3)


// easy challanges
//Write a function named max that receives two numbers as input and returns the bigger number among the two.
//For example, let's assume the input is 132 and 154. The function should return 154 because it is bigger than 132.

function max(num1,num2){
    if(num1>num2){
        return num1;

    }else {
        return num2
    }
}
console.log(max(34,22))

//Write a function named greet that gets a name as input and prints Hello, name .

//Example,

//greet("Bob")  ->  "Hello, Bob"
function greetings(name){
    console.log(`Hello ${name}`)

}
greetings('Mucsin')

// Write a function named sum that gets a number n and returns the sum of the numbers from 1 to n.
// Bonus - Make it a recursive function!

function sums(n){
  let sumnumber=0;
    for(let x=1; x <= n; x++){
        sumnumber +=x;
    }
    return sumnumber;
}
console.log(sums(6))



function nsum(n){
    if(n===1){
        return 1
    }
    return n + sums(n-1)
}
console.log(nsum(6))