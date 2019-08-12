# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### From memory, answer the following:

1. What's the difference between =, ==, and === in JavaScript?

= is used to define a variable as well as arguments in functions
== is used to say that something evaluates to a specific value
=== is like '==' but more strict. whereas '==' allows for '2' == 2, the third
  '=' requires that two variables be exactly the same on both sides of the evaluator

2. What is the difference between an array's index and length?

an array's index determines the location of each specific element in the array, be it
the first or last element or any in between. an array's length is the total number of elements
in an array. the index of the final element is the length minus 1 since the index begins at 0

3. What is a function's declaration, argument, and call?
**declaration
a function's declaration is what defines its purpose and what kind of data it takes and returns.
The declaration also declares the name of the function to call it. An argument is what is passed into 
the function. Often times, this element is a number, string,
or array. the argument's type should be explicitly expressed in the function's declaration. the 
call of a function is where the function is actually being asked to run within code. It can be 
defined a global scope, for example, but called within a local scope once or many times throughout
the code.

4. What are the three main steps in saving work to github?

1. git add .  
2. git commit -m where we leave a detailed message describing what we've changed to a file
3. git push

5. What is an object?

an object is like a variable with several attributes. These attributes are saved as keys containing
values. objects make compiling valuable data easier to keep organized and access in meaningful ways
by creating 'profiles' to compare objects with other similar objects. This becomes easier when you 
implement classes to house objects under a standardized format

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

I think it'll log 'inside' because 'outside' is outside of scope and not otherwise referenced in the code.
in order to pass 'outside', i would pass var text into logIt() and change the name of the var for 'inside'

1b. Test the function. Explain why the function returned what it did.

  Your answer:
  I think it returns 'undefined' because, building off my previous logic, the 'outside' var was out of scope.
  however, the 'inside' var also came after the invocation of the console.log and so the variable that the function
  called didn't have any associated value

  Researched answer:
  This is a problem of variable hoisting. The var text = 'inside' variable is hoisted to the top of the function, however
  the variable's value is not carried with the key 'var', so the computer doesn't
  recognize a value for 'text' and prints 'undefined'. The 'outside' value is out of scope of the function so the computer
  acknowledges a new value for 'text' which replaces the value of 'outside,' but, as previously stated,
  since the value isn't hoisted above the log() - only the declaration of a new value is - the computer
  just prints 'undefined'. To solve this, you can remove 'var' from in front of the 'inside' text key, move
  that declaration above the log() declaration, or omit the var 'inside' value if the goal is to print 'outside'
  as the value of text.

2. What is JSON? How does it relate to javascript objects?

  Your answer: 
  Javascript Object Notation. It allows for objects to contain various variables and qualities. This allows
  for a greater library to access the data and search for specific data/criteria from throughout the library and
  the objects within 

  Researched answer:
  it is a lightweight format for storing and transporting data. it is used when data is sent from a server to a
  web page. json is 'self-describing' and is easy to understand. because javascript object notation is identical
  to json syntax, javascript can easily convert json data into native javascript objects.


3. What does CRUD stand for?

  Your answer: 
  Create
  Read
  Update
  Delete/Destroy
    these are the 4 foundational proccesses that take place behind a web page
  
  Researched answer:


4. What is a higher-order function?

  Your answer: ¯\_(ツ)_/¯

  Researched answer: a higher order function is a function that takes a function as an
  argument or returns a function. Higher order functions are in contrast to first order
  functions which take variables as arugments and return variables rather than functions.
  .map() and .filter() are both examples of higher order functions


5. Stretch: What is a closure, what is it good for and how do you recognize one?

  Your answer: ¯\_(ツ)_/¯

  Researched answer: a closure is the combination of an enclosed function with references
  to its surrounding state - meaning it gives you access to an outer function's scope from
  an inner function. closures are created each time a function is created. in short, closures 
  control what is and isn't in scope for a particular function, along with which variables
  are shared between sibling functions in the same scope.


6. Stretch: What is an API?

  Your answer: an API is the library that stores all data operating on a web page. API's
  are typically regarded as computer code meaning they aren't intended to be read by humans.
  They do, however, sometimes store readable databases of objects that would be readable/
  accessible to programmers.

  Researched answer: standing for application programming interface, an API is like a menu
  at a restaurant. It provides a list of everything with a description for each item. When
  the user makes an order/request, the API contacts a server and returns the response, making 
  sure that it is of the correct format all without leaving the web page


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

if you could program an application, what would it be/do?

2. What was your favorite topic this week?

Pig Lating project and map/filter

3. What was your "A-ha!" moment this week?

the morning after the Pig Latin project when we resumed to work on it. I
decided to work alone for a bit to see if I could get my idea to work. It
was too difficult to walk my partner through it and I didn't want to take
control of the joint pc, especially since I wasn't totally sure my idea was
correct.