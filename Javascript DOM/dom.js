// //Examine the document object
// /*console.dir(document);
// console.log(document.URL)
// console.log(document.title)
// //document.title="nods123"
// //console.log(document.title)
// document.title="item lister"
// console.log(document.doctype)
// console.log(document.all)
// console.log(document.body)
// console.log(document.forms[0])
// console.log(document.images)
// */

// //Selectors


// //Get element by ID
// //console.log(document.getElementById('addForm'))
// //const addform=document.getElementById('addForm')
// //const header=document.getElementById('main-header')
// //console.log(addform)
// //addform.textContent='Hellllllllllll'
// //addform.innerText="udemy" //same as that of above but it pays attention to styling
// //addform.innerHTML="<h1>Hello Wahab</h1>";

// //change some styling 
// //addform.style.borderBottom="solid 10px black";
// //header.style.borderBottom="solid 10px black";



// //---------------GETELEMENTSBYCLASSNAMES------------
// // dom.js
// /*const elementsWithClassTitle = document.getElementsByClassName("list-group-item");
// console.log(elementsWithClassTitle);

// // Assuming you want to set the style of each element with the "title" class
// for (let i = 0; i < elementsWithClassTitle.length; i++) {
//   elementsWithClassTitle[i].style.borderBottom = "solid 10px blue";
// }
// */
// //--------GET ELEMENTS BY TAG NAME-----------------



// /*const title1=document.getElementsByClassName("title");
// console.log(title1)
// title1[0].textContent="I am abdul wahab"
// title1[1].style.borderBottom="dotted 5px yellow"
// title1[1].style.backgroundColor="grey"


// const li1=document.getElementsByTagName('li');
// console.log(li1)
// for (let i = 0; i < li1.length; i++) {
//     li1[i].style.backgroundColor= "yellow ";
//   }

// */



// // //-------QUERY SELECTOR--------------------IT ONLY GRABS ONLY FIRST ONE IF HAVE MORE THAN ONE MORE TAGS etc
// // const header=document.querySelector('#main-header')
// // header.style.borderBottom="solid 4px #ccc"

// // const inp=document.querySelector("input")
// // inp.value="HELLOW !!"

// // const btn=document.querySelector('input[type="submit"]')
// // btn.value="THANK you"


// // const item=document.querySelector('.list-group')   //because we choosed class which were not specified

// // item.style.color="red"

// // const item1=document.querySelector('.list-group-item')
// // item1.style.color="coral"  

// // const last_item=document.querySelector('.list-group-item:last-child')
// // last_item.style.color="pink"

// // const second_item=document.querySelector('.list-group-item:nth-child(2)')
// // second_item.style.color="blue"






// // //-------------QUERY SELECTOR ALL---------------

// // const titles=document.querySelectorAll('.title')
// // console.log(titles)
// // titles[0].textContent='yesss'
// // titles[1].textContent="pogo"

// // for(let i=0;i<titles.length;i++){
// //   titles[i].style.color="orange"
// // }


// // const odd=document.querySelectorAll('li:nth-child(odd)')

// // for(let i=0;i<odd.length;i++){
// //       odd[i].style.backgroundColor='green'
// // }
// // const even=document.querySelectorAll('li:nth-child(even)')

// // for(let i=0;i<even.length;i++){
// //       even[i].style.backgroundColor='brown'
// // }








// //-----------------PART II----------------------------

// //----------Traversing the DOM------------Traversing the DOM means navigating through the Document Object Model (DOM) tree to access and manipulate elements and their relationships. The DOM represents the HTML or XML structure of a web page as a hierarchical tree, where each element (e.g., HTML tags) is represented as a node, and their relationships (parent, child, siblings) are represented as branches in the tree.


// //-------------Parent node------------------
// const itemlist=document.querySelector('#items')
// // console.log(itemlist.parentNode)
// // itemlist.parentNode.style.backgroundColor="#f4f4f4"
// // console.log(itemlist.parentNode.parentNode)   //and we can keep going and going



// //------------PARENT ELEMENT---------same as that of parent Node in most cases -----------
// // console.log(itemlist.parentElement)
// // itemlist.parentElement.style.backgroundColor="#f4f4f4"
// // console.log(itemlist.parentElement.parentElement)
  

// //-------------CHILD's NODES-------------

// //console.log(itemlist.childNodes) //we get text because in html file we have spaces between li items so using child nodes is not suggested

// //--------------childrens--------------
// // console.log(itemlist.children)
// // console.log(itemlist.children[0].style.backgroundColor="red")
// // //---------first element child
// // console.log(itemlist.firstElementChild.textContent="helwowoowowowoowow")

// // //---------last element child---------
// // console.log(itemlist.lastElementChild.textcontent="orange")

// // //next sibling

// // console.log(itemlist.nextElementSibling)  // it has no siblings so answer is null

// // //previous siblings
// // console.log(itemlist.previousElementSibling)
// // itemlist.previousElementSibling.style.backgroundColor="green"


// //using Element__ gives us elements without spaces between li items in html file


// //Create elements and insert them in javascript

// //.create element

// const newdiv=document.createElement('div');
// //Add class
// newdiv.className="Hello";
// console.log(newdiv);
// //Add id
// const newdiv1=document.createElement('div');
// newdiv1.id='Hellow1';

// newdiv1.setAttribute('title','hellow111')
// console.log(newdiv1)


// //create text node
// const newdivtext=document.createTextNode('HelllllllllWWWWWo')

// //Add text to div
// newdiv1.appendChild(newdivtext);
// console.log(newdiv1)

// //Add text to user interface for now

// const container=document.querySelector('header .container')
// const h1=document.querySelector('header h1')

// container.insertBefore(newdiv1,h1)
// newdiv1.style.fontFamily='serif'




//-------------------Event listenersssss------------
// const button1= document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){     //e stands for elements
//     //console.log('Button clicked');
//     //const mainHeader=document.getElementById('main-header').textContent='Changed';
//     //document.querySelector('#main').style.backgroundColor="red";
//     console.log(e);
//     console.log(e.target.id);
//    // const output=document.querySelector('output');
//    // output.innerHTML='<h3>'+Hello+'</h3>'
//    console.log(e.type)
// }   


//const button= document.getElementById('button').addEventListener('click',runEvent);
//const button= document.getElementById('button').addEventListener('dblclick',runEvent);
//const button= document.getElementById('button').addEventListener('mousedown',runEvent);
//const button= document.getElementById('button').addEventListener('mouseup',runEvent);


// function runEvent(e){
//     console.log('Event type : '+e.type);

// }


const box = document.getElementById('box-element'); // Change the ID to "box-element"

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);
const itemInput=document.querySelector('input[type="text"]')
const form=document.querySelector('form')
//itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)
// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)
// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)
//itemInput.addEventListener('input',runEvent)
// const select=document.querySelector('select');
// select.addEventListener('change',runEvent)

form.addEventListener('submit',runEvent)

function runEvent(e) {
  e.preventDefault();
  console.log('Event type: ' + e.type);
  // console.log(e.target.value)
  // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

//output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3>'+'<h3>MouseY: '+e.offsetY+'</h3>';


//box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"; 

//offsetX for red offsetY for green 40 for blue
}







//---------------final---------------------

const form1=document.getElementById('addForm')
const itemlist=document.getElementById('items')
const filter=document.getElementById('filter')


form1.addEventListener('submit',addItem)
//Delete event

itemlist.addEventListener('click',removeItem)
//Filter event
filter.addEventListener('keyup',filterItems)

function addItem(e){
  e.preventDefault();
  //Get input value
  const newItem=document.getElementById('item').value 
  //create new li item
  const li=document.createElement('li')
  //add class
  li.className='list-group-item'
  //Add text Node with input value
  li.appendChild(document.createTextNode(newItem))
  //create del button element

  const deleteBtn=document.createElement('button')
  //Add classes to del button
  deleteBtn.className='btn btn-danger btn-sm float-right delete'

  //Append text Node

  deleteBtn.appendChild(document.createTextNode('X'))
  //Append button to li

  li.appendChild(deleteBtn)

  //Append li to list

  itemlist.appendChild(li)

}


function removeItem(e){
  if (e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
      var li=e.target.parentElement;
      itemlist.removeChild(li)

    }
  }
}


function filterItems(e){
  //convert text to lower case

  const text=e.target.value.toLowerCase();
  const items=itemlist.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    const itemName=item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !=-1){
      item.style.display='block';

    }
    else{
      item.style.display='none'
    }

  })

}


