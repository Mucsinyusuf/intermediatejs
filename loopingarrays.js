// if we want to accses each element in array we can use a for loop
// to iterate through every element even if we dont know how many eleements teh arrays has
// we can use the array.lenght property to get the number
//of elements an array has example

const arr = [50, 60, 70, 80 ,90, 100];
console.log(arr.length);

// example using for loop to iterate through an array

const arr2 = ['Tiger', 'Elephant', 'Cat'];
for(i=0; i<arr2.length; i++){
    
    console.log(arr2[i])

}
// You are given an array called numbers. 
//Print the last 5 elements of the array using a for loop.

const numbers = [14,13,12,11,10, 9, 8, 7, 6,5];
for (j=numbers.length-5; j<numbers.length; j++){
    console.log(numbers[j])
}

