 ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
 Coding practical questions

 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

 isDivis = (num) => {
   if( num%3===0 ){
     return `${num} is divisible by 3`
   }else{
     return `${num} is NOT divisible by 3`
   }
 }
 console.log(isDivis(15));
 console.log(isDivis(0));
 console.log(isDivis(385));
 console.log(isDivis(-7));

 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

 let helloMe = {
   firstName: "Rob",
   lastName: "Osborn",
   age: 26,
   hobby: "tennis",
   defineMe() {
     return `Good morning. My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and, when I'm not coding, I enjoy ${this.hobby}.`
   }
 }
 console.log(helloMe.defineMe());
 -------------------------------------------------
 Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"

 everyOther = (arr) => {
   let newArr = []
   for(let i = 0; i<arr.length; i++){
     if(i%2===0){
       newArr.push(arr[i])
     }
   }
   return newArr.join(' ')
 }
 console.log(everyOther(randomNouns));

 var everyOther2 = randomNouns.filter(function(num){
   if(randomNouns.indexOf(num) %2 ===0){
     return num
   }
 })
 console.log(everyOther2.join(' '));

 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]

 wordLength = (arr) =>{
   newArr = []
   for (let i = 0; i < arr.length; i++) {
     newArr.push(arr[i].length)
   }
   return newArr
 }
 console.log(wordLength(randomNouns))


 let newArr = randomNouns.map(function(word){
   return word.length
 })
 console.log(newArr);

 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

 capitalizer = (arr) => {
   newArr = []
   arr.forEach(function(word){
     newArr.push(`${word[0].toUpperCase()}${word.substring(1)}`)
   })
   return newArr
 }
 console.log(capitalizer(randomNouns));

 let capitalizer2 = randomNouns.map(function(word){
   return `${word[0].toUpperCase()}${word.substring(1)}`
 })
 console.log(capitalizer2);

 -------------------------------------------------
 Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

 alphabetSoup = (str) => {
   arr = str.split('')
   return arr.sort().join('')
 }

 console.log(alphabetSoup(testString1));
 console.log(alphabetSoup(testString2));
 console.log(alphabetSoup(testString3));

 alphabetSoup2 = (str) => {return str.split('').sort().join('')}

 console.log(alphabetSoup2(testString1));
 console.log(alphabetSoup2(testString2));
 console.log(alphabetSoup2(testString3));


 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

 alphabetizer = (str1, str2, str3) => {
   arr = str1.split('').concat(str2.split('')).concat(str3.split(''))
    arr.push(str2.split(''))
    arr.push(str3.split(''))
   return arr.sort().join('')
 }
 console.log(alphabetizer(testString1, testString2, testString3));

 -------------------------------------------------
 Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

 howMany = (arr, str) =>{
   newArr = []
   for (let i = 0; i < arr.length; i++) {
     newArr.push( `${arr[i]} ${str[i]}` )
   }
   return newArr.join(' ')
 }
 console.log(howMany(amounts, animals));

 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

 howMany = (arr, str) =>{
   newArr = []
   for (let i = 0; i < arr.length; i++) {
     if(arr[i] === 1){
       newArr.push(`${arr[i]} ${str[i].substring(0, str[i].length-1)}`)
     }else{
       newArr.push( `${arr[i]} ${str[i]}` )
     }
   }
   return newArr.join(' ')
 }
 console.log(howMany(amounts, animals));

