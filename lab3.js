/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.
*/
//[1, 2, 3].sum() // Output: 6
Array.prototype.sum = function (arr) {
  sum=0;
  for (var i=0; i<this.length;i++)
  if (typeof(this[i]) != 'number'){
    throw new Error ('Target array must contain numbers only');
  }
  else{ 
      sum=sum+this[i];  
}
return sum;
} 
 [1,2,3].sum()

/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.
*/
//const obj = {};
String = function (obj){
if ((Object.keys(obj)).length === 0){
  console.log("This is an object")
}
else if ("message" in obj) {
  console.log(obj.message);
}
}
// b. Make String(obj) of only the following object return the content of the message
// while the all other objects still return 'This is an object'.
//const obj = { message: 'This is a message' };
//String(obj) // Output: 'This is a message'.

/*
  3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 
  
  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.

  b. Write a function that detects wether an animal is a bird or not.
  isBird(animal) // Output: true or false.
*/
//ES6
class Animal {
  static counter=0;
  constructor(color,weight){
   
    if (Animal.counter > 100)
    {
      throw new Error('No More animals are allowed to be created')
    }
    else
    {
      Animal.counter++;
    }
   
    this.color=color;
    this.weight=weight;
    
  }
  walk(){
    return console.log("walk")
  }
  eat(){
    return console.log("eat")
  }
  attack(){
    return console.log("ATTACK!")
  }
  run(){
    return console.log("run")
  }

}
//const animal1=new Animal('red',45)
class Bird extends Animal{
  constructor(color,weight){
    super(color,weight);
  }
  fly()
  {
    return console.log("bird is flying")
  }
}
//const b1= new Bird('green',66)
//stand alone function
function isBird(animal){
  if (animal instanceof Bird)
  console.log("true")
else
console.log("false")
}
///////////////ES5/////////////////////
Animal.count=0
function Animal(color,weight) {
  if (Animal.count >100)
  {
    throw new Error('No More animals are allowed to be created')
  }
  else{
    Animal.count++;
  }

  this.color=color;
  this.weight=weight;
}
Animal.prototype.walk = function (){
  console.log("walk")
}
Animal.prototype.run = function (){
  console.log("run")
}
Animal.prototype.eat = function (){
  console.log("eat")
}
Animal.prototype.attack = function (){
  console.log("attack")
}
function Bird(color, weight){
  Animal.call(this,color,weight);
}
Bird.prototype=Object.create(Animal.prototype);
Bird.prototype.fly = function ()
{
  console.log("bird is flying!")
}

/*for (let i=0; i<100;i++)
{
  new Animal ('lol', 34);
}*/
