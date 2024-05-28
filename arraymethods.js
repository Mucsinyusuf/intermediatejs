let letters = ['a', 'b', 'd', 'c'];
// .includes()
// this method is used to check whether the array includes a certain element.
console.log(letters.includes('f'))

// .indexof()
// this method is used to find the ndex of an element in array
// if there are many elements of the same it retursn the first index
// if the element does not exits it returns -1
console.log(letters.indexOf('f'));


// .reverse()
// this method is used to reverse an array

console.log(letters.reverse())

//.fill()
// this method is used to fill the whole array with a value
// with this method we can also specify a range to be filled
// if we dont want to fill the whole array with the value

// letters.fill('f')
// console.log(letters)
// this one changes the whole array wiyh f

letters.fill('f', /*from*/ 1,/*to*/ 3);
console.log(letters)

// Is Array
// The .isArray() method is a static method of 
//the Array class. You can learn more about classes in the next course. 
//For now, this is how you check if a variable is an array:

//.splice()
// this method is used to add or remov eelements from an arra within a range of indexes
letters.splice(2,1, 'j', 'k')
console.log(letters)

//.sort()
// is used to sort an array
console.log(letters.sort())

// Those are most of the methods that you will use. 
//There are some other methods that are used more like .map(), .forEach(), .filter(), .reduce(), .some() 
//and more, but we will learn more about those after we cover functions. 
//Those methods include functions.