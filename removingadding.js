// adding elements in an array

// The most commonly used way to add elements is using the .push() method.
// the .push() can add multiple elemnts at the same time
// example
const animals = ['Tiger', 'Dog', 'Cat'];
animals.push('elephant')
console.log(animals)

// we can also use .unshift() method 
// this method adds an elemnt to the begening of the array

animals.unshift('Cow')
console.log(animals)

// Removing elemnts

// we can remove elements by using the .pop() methode.
// the method removes the last element of the array
animals.pop()
console.log(animals)

// we can aslo use shift ()
// this method removes an elemnt from the begening of the array
animals.shift()
console.log(animals)