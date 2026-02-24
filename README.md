1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :

Differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById() is used to select a single HTML element based on its unique id attribute.

getElementsByClassName() is used to select all elements that have a specific class name. Unlike getElementById(), it can return multiple elements.
It returns a live HTMLCollection.

querySelector() selects the first element that matches a specified CSS selector. It is more flexible because it allows the use of any valid CSS selector, 
such as ID selectors, class selectors, tag names, or combinations of them. It returns only the first matching element or null if no match is found.

querySelectorAll() selects all elements that match a specified CSS selector. It returns a static NodeList, meaning the list does not automatically update 
when the document changes.

In summary, getElementById() and getElementsByClassName() are older DOM selection methods that search specifically by ID or class name,while querySelector()
and querySelectorAll() are more modern and flexible because they use CSS selector syntax. 

The key differences lie in flexibility, return type, and whether the returned collection is live or static.

2. How do you create and insert a new element into the DOM?

Answer :

Steps to Create and Insert a New Element into the DOM :--

Step 1: Create a New Element

Use the document.createElement() method to create a new HTML element.

Example:

let newElement = document.createElement("p");

Step 2: Add text or HTML content using textContent, innerText, or innerHTML.

Example:

newElement.textContent = "This is a new paragraph.";

Step 3:Add attributes like id, class, or others using setAttribute() or direct property assignment.

Example:

newElement.id = "para1";

Step 4: Choose the existing element where the new element will be inserted.

Example:
let parent = document.body;

Step 5: Insert the New Element into the DOM
Use methods like appendChild(), append(), or insertBefore() to insert the element.

Example:

parent.appendChild(newElement);

3. What is Event Bubbling? And how does it work?

Answer :

Event Bubbling is a process where an event starts on the element that was clicked and then moves upward to its parent elements.

Work process--

When we click on an element, the event first runs on that element.After that, the same event automatically moves up to its parent element, 
then to the grandparent, and continues moving upward until it reaches the top of the document.

So, the event travels from the inside element to the outer elements.


4. What is Event Delegation in JavaScript?Why is it useful?

Answer :

Event Delegation is a technique in JavaScript where One parent handles events for all its child elements.

It Useful --

a.It improves performance 

b.It works for dynamically added elements 

c.It is useful for cleaner and simpler code 


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer :

Difference between preventDefault() and stopPropagation() methods---

a.preventDefault() is used to block the browser’s default behavior.

b.And stopPropagation() is used to block the event from reaching other elements.


