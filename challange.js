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


