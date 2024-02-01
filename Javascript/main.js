//console.log('Hello world');
//console.log("I am Abdul wahab");
//console.error("This is an error");

//          Variables(var,let,const):
//let x=30;
//x=31;  // can re assign values
//console.log(x)

//const y=90
//y=91    //will give an error
//console.log(y)


//          DataTypes(Strings,Numbers,Bollean,null,Undefined)

//const name1="Abdul Wahab";
//const age=18;
//const height=5.7;
//const disability=null ;
//const married=false;
//const willmarry=undefined;
//let willrich; //Undefined too hqhqh

//console.log(typeof age);
//console.log(typeof height);  //see no float concept



//         Concatenation
//          Old method
//console.log("My name is "+name1+", My age is "+age);

//           New method

//const hello=(`My name is ${name1}, My age is ${age}`);
//console.log(hello);




//          String Properties


/*const a="Hello World!!";
console.log(a.length);  //Property just like attribute in python not method
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.substring(0,3));
console.log(a.substring(0,3).toUpperCase());
console.log(a.split(''));


const b="Tianba,Stalwart,Geek,Illumini8"
console.log(b.split(','));
*/

//       Arrays ---Variable that holds multiple values

/*const numbers=new Array(1,2,3,4,5);
console.log(numbers);


const arr=new Array("Peach",1,true);
console.log(arr);
console.log(arr[1]);


const fruits=new Array("peach","melon","banana","orange")
fruits[4]="mango";
fruits[3]="stawberry";
fruits.push("ink");  //in the end
fruits.unshift("reed")  //in the start
fruits.pop()    //pop from last
console.log(fruits) 
console.log(Array.isArray("mango"));  //Returning false don't know why

//  Try this
const fru = new Array("peach", "melon", "banana", "orange");
const isMangoInArray = fru.includes("banana");
console.log(isMangoInArray); // This will log either true or false
*/



/*
          //Object literals---Just like dictionaries in python with key value pair
const person={
    FirstName:"Abdul",
    LastName:"Wahab",
    age:18,
    education:"BSCS",
    Hobbies:['hockey','Gardening'],
    address:{
        street:"Street No 2",
        House:"House No 301",
        Town:"Gulshan hussain town",
    }


}
console.log(person.FirstName,person.address);
console.log(person.address.street);
console.log(person.Hobbies[1]);

const {FirstName,LastName,address:{House}}=person ;  //another way to do above stuffff

console.log(FirstName,LastName,House);

person.email='abdulwahab901278@gmail.com';  //adding new features
console.log(person.email)*/


         //Arrays//
/*const todos=[
{
    id:1,
    task:"Meet the boss!",
    completed:true,
},
{
    id:2,
    task:"Load data!",
    completed:true,
},
{
    id:3,
    task:"Lunch!",
    completed:false,
}
];
*/
//console.log(todos[0].task)


//    JSON

//Can also convert above array into JSON format for sending data and retreiving As:
//const todoJSON=JSON.stringify(todos);
//console.log(todoJSON);

//       LOOPS


//       For loop

/*for(let i=0;i<=10;i++){
    console.log(`For loop number: ${i}`);
};


//    While loop
let i=1;

while (i<=10){
    
    console.log(i);
    i++ ;
};*/
//     for loop on above array

/*for (let i=0;i<todos.length;i++){
    console.log(todos[i].task);
}*/
//---Really not the best way to do this!----//
 

//---------------------TRY THIS--------------------//

//for (let todo of todos){
//    console.log(todo.task);
//}

//----------This method is good but nt enough to do all stuff properly

//----------High order array method-------//

//-----------For Each-----------------//

/*todos.forEach (function(todo){
    console.log(todo.task);
});

//-------------filter-------------
const completedtask= todos.filter(function(todo){
    return todo.completed===true;
})

console.log(completedtask)


//---------------map-----------the map function is used here to create a new array that contains the task property values extracted from each object in the todos array. This is a common technique to transform data in JavaScript arrays without directly modifying the original array.
const todotask= todos.map(function(todo){
    return todo.task;
})
console.log(todotask)
//------Using filter and map function side by side
const completedtask1= todos.filter(function(todo){
    return todo.completed===false;
}).map(function(todo){
    return todo.task
})

console.log(completedtask1)
*/




//----------------Conditional statements
/*
const x='10';
if (x===10){
    console.log("x is 10");

}
else{
    console.log("x is not 10");
}

const x1='10';
if (x1==10){
    console.log("x is 10");
}

const x2=20;
if (x2===10){
    console.log("x is 10");

}
else if (x2>10){
    console.log("x is greater than 10");

}
else{
    console.log("x is not 10");
}

*/

//----------------and ,or -----------
/*
const x=10;
const y=5;
if (x===10 || y===7){
    console.log("at least one condition satisfies");

}

const x2=10;
const y2=5;
if (x2===10 && y2===7){
    console.log("Both conditions satisfied");

}
else{
    console.log("couldn't satisfy!")
}

*/

//----------Ternary operators-------
/*const x=10;
const color= x>10?'red color':'green color';
console.log(color)
*/
//------------------Switches---------

/*
const x=10;
const color= x>10?'red color':'green color';

switch(color){
    case 'red color':
        console.log("I am gay");
        break;
    case 'green color':
        console.log("I am not gay");
        break;
    default:
        console.log("stfu!")
        break;
}
*/
/*

//-----------------Functions--------------

function addNums(num1=2,num2=2){
     return(num1+num2);

}
console.log(addNums(5,6))
//default values are two if we don't pass any value in function like this:
console.log(addNums())
*/
//it will add default values


//----------------Arrow Functions---------

/*const  addNums=(num3=2,num4=2) => num3+num4;


console.log(addNums(5,6))
*/
// No need to return any value and of course no need to use parenthesis, Function name is now a variable name..




//----------------------Object oriented programming------------
//------------------------1st Method----------------------
/*function Person(firstname,lastname,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob)
    this.birthdayyear=function(){      //Method in class or object
        return this.dob.getFullYear();
    }
    this.getfullname=function(){
        return `${this.firstname} ${this.lastname}`
    }

}
const Person1= new Person('john','wick','4-3-2007');
const Person2= new Person('chalrie','quinn','2-3-2004');  //object or instance is created //new is the constructor

console.log(Person1);

console.log(Person1.firstname);
console.log(Person2.dob);
console.log(Person2.dob.getFullYear());

console.log(Person1.birthdayyear());
console.log(Person2.getfullname());
*/

// Above method also have functions in console.log body
// TO overcome this!!
//USE Prototype!

/*
function Person(firstname,lastname,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob)


}

Person.prototype.birthdayyear=function(){      //Method in class or object
    return this.dob.getFullYear();
}
Person.prototype.getfullname=function(){
    return `${this.firstname} ${this.lastname}`
}

const Person3= new Person('Abdul','Wahab',"2-3-2004");
console.log(Person3.getfullname());
console.log(Person3.dob);
*/
//----After ES-6 update classes were added to javascript So,
//----------------Method 2-------------------------

/*
class Person{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob)
           
    }
    birthdayyear(){      //Method in class or object
        return this.dob.getFullYear();
    }
    getfullname(){
        return `${this.firstname} ${this.lastname}`
    }     
}

const Person1=new Person('abdul','wahab','16-030-2023')
console.log(Person1.getfullname());
*/


//-------------------JAVASCRIPT DOM-----------------------

//console.log(Window)
//Single element selector
/*
const form2=document.getElementById('my-form');
console.log(form2)
console.log(document.querySelector('h1'));
//Multiple element selector
console.log(document.querySelectorAll('.item'));  //give nodes list//can iterate over!
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByClassName('item'))
*/
//------for loop through item!
//const items = document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

/*const ul=document.querySelector('.items')
//ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent="WAHAB!";
ul.children[0].innertext="HELLO!"; // don't know why not working
ul.lastElementChild.innerHTML="<h1>Hellow</h1>";


const btn =document.querySelector('.btn');
btn.style.background='red';
*/
/*const btn =document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
    console.log("click")
    document.querySelector('#my-form').style.background="#ccc";


})
*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}



