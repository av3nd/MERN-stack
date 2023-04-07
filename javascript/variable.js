// datatype in javascript are: 
// -String
// -numbers
// -Boolean
// -Array
// -objects


// javascript 1st initilizes functions or variables 
// suppose in the case of var javascript directly allocates memmory for var in the ram

// that is why we dont use var because it can create problems in the future when code logic or syntax is wrong
// that is const and let is used to make the code robust and free of error becasue it can be accesed outside the function as it can be initilized even 

// const and let should be initilized befored printing
// where as var can be used directly because it allocates the memory

// first way to assign variable
var x = 1

// second way to assign variable
let y = 2
//y=z //cannot reassgin due to const

// third way to assign variable
const z = 3 // cannot be changed 

// fourth way to assign variable
a = 4


// print variables
console.log(x)
console.log(y)
console.log(z)


// javascript function and var initilizes at first at first run of the file
// creates memory space for function(copy pase the function code in the memory) and creaets memory as well as initilizes the var as undefined

// functions in javascript are treated as first class citizen just like variables
// function can be assigned to a variable and also can be called inside a function or assigned as a parameter
console.log(add(8,9))


function add( x,  y){
    return x+y
}

// these two lines explains that javascript has no type safety
// so programmers should be aware of type safety while using javascript

console.log(add(8,9))
console.log(add(8,"ram"))



// function expression
// function expression are assigned to variable
// it does not have a name like the above function
// we call this function as anonymous function as it has no name

// cannot be called here cause subtract is a variable
// console.log(subtract(4,1))

 const subtract = function (a,b){
    return a-b
 }

//  can be called as it was initilized before calling and it is const
 console.log(subtract(3,1))


//  another function expression using arrow function
// it has no name just like above

// cannot be called before initilization
const multiply = (x,y)=> {
    return x*y;
}

console.log(multiply(1,1))

// shortcut arrow function
// it is also called lamba function

const divide = (x,y) => x/y
console.log(divide(8,4))
