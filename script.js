const animalArray = ['dog', 'cat', 'fish'];

animalArray.push("monkey", "donkey");

console.log(animalArray);
replace the last element with the word "Last"
animalArray.splice(-1,1, "Last");
console.log(animalArray);

Create an array with 6 of your favorite foods. With the loop of your choice, iterate through the array, but only print out the foods with an even index.
let favoriteFood = ['Banana', 'Apple', 'Avocado', 'Orange', 'Mango', 'Pear'];

for (let i = 0; i < favoriteFood.length; i++){
  if (i % 2 === 0 && i > 0){
    console.log(favoriteFood[i]);
  }
}

Check if the word appears in given array and print out if it does or doesn’t:
let word = 'miami';
let arr = ['bcn', 'mia', 'sao', 'mex', 'par', 'miami', 'ams', 'ber', 'paris', 'lis', 'mad'];

for (let i = 0; i < arr.length; i++){
  if(word === arr[i]){
    console.log('It does exist');
    break;
  } else {
    console.log('It does not exist');
  }

}


console.log(arr.includes(word))
arr.forEach(element => {
  if (word === element){
    console.log('It does exist');
  } 
})

if (arr.includes(word)){
  console.log('Exist');
} else{
  console.log('Does not exist');
}

Given array of numbers, calculate the sum:

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (let i = 0; i < prices.length; i++){
  sum += prices[i];
 // console.log(sum);
}

console.log(Number(sum.toFixed(1)));