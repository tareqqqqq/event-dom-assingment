
/* What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? */

Answer: 
1.getElementById: To find any specific element from dom for moving webpage better run, we declare any id name on html and get the single element object by getElementById.

2.getElementsByClassName: To find multiple element from dom for doing special work on webpage , we declare matching class name on elements  and get a HtmlCollection array. Its not an array but work on something like array.For doing traversing or delegation, we specially use on this purpose.

3.querySelector: In html file, we declare a same class name in some elements like matching class name. we can select frist class name to return an object by querySelector for doing especial purpose.

4.querySelectorAll: querySelector can select frist class name but querySelectorAll can select all and give a NodeList.



/* How do you create and insert a new element into the DOM? 
*/

Answer: To create and insert a new element into DOM,
frist, we declare an id name on an element in Html file like div , h1, p etc. Its a parent .Then in js file , we declare the id name by getElementById . For Example,

const divName= document.getElementById("any id name")


Second, we are created an element like div, p, h1 by createElement. for example,
const p=document.createElement("p")

then insert any element or content by innerText or innerHTML. like,
div.innerText="this is me" 

third ,use appendChild.for example, 
divName.appendChild(p)



/* What is Event Bubbling and how does it work? */

answer: Event Bubbling means an event happens on a dom tree and reaches the document object until it stops.

It works like when we click  a button  .An event is occured on this button child. then its bubbling and handle its parent element then bubbling grandparent.This process  can happen until it stop. finally it reaches document. but when we use  stopPropagation() method
Its stopped

/* What is Event Delegation in JavaScript? Why is it useful? */

Answer: Event Delegation means using a parent to manage multiple child elements by event bubbling.  Its not necessary to use addListenerEvent for single child.  only one addListenerEvent can use to manage child .
It needs low memory .And Its a dynamic process to add new element on dom .That's why its very useful technique.

/* What is the difference between preventDefault() and stopPropagation() methods? */

 To stop bubbling on a DOM we use  stopPropagation(). method. we use this below function: 
 e.stopPropagation() 

 To stop browser's default action we use preventDefault().we use this below function:
 e.preventDefault()



