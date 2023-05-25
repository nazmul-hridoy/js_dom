/*
 ALERT METHOD VIA FUNCTION
   * function showAlert() {
       alert('Alert by Function Call');
   }

// * BUTTON CLICKED FUNCTION
const clickMeBtn = document.getElementById('btn-click-me');
clickMeBtn.onclick = function () {
    console.log('Button Clicked');
}
// * BUTTON OVER FUNCTION
clickMeBtn.onmouseover = function () {
    console.log('Mouse Over');
}
//
clickMeBtn.addEventListener('click', function () {
    console.log('Another Click Event');
});
// STOP BUBBLE EVENT
clickMeBtn.onclick = function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log('Button Clicked');
}
// CLICK ON BOX1
const box1 = document.getElementById('box1');
box1.addEventListener('click', function () {
    console.log('Clicked on Box 1');
})

// STOP Deafult EVENT
const link = document.getElementById('link');
link.addEventListener('click', function (event) {
    event.preventDefault();
});

// QUERY SELECTOR()
let x = document.querySelector("p");
console.log(x);
document.querySelector("ul").style.color = 'blue';

// QUERYSELETORALL()

let allitems = document.querySelectorAll('ul li');
for (value = 0; value < allitems.length; value++) {
    const listitems = allitems[value]
    listitems.innerText = "HOLA"
}
for (value = 0; value < allitems.length; value++) {
    const listitems = allitems[value]
    listitems.style.color = "red"
}



// SUBMIT Button
// PREVENT DEFAULT ACTION
const submitBtn = document.querySelector('button[type=submit]');
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
})

// SUBIT NOT BEFORE FILL_UP_INPUT_BOXES_&_SHOW_ALERT 
const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type=submit]');
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputs[0].value === '' || inputs[1].value === '') {
        alert('Input Field cannot be Empty!');
    }
});

// SHOW INPUT VALUES AFTER SUBMIT
const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button[type=submit]');
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputs[0].value === '' || inputs[1].value === '') {
        alert('Input Field cannot be Empty!');
    } else {
        var input0Data = inputs[0].value;
        var input1Data = inputs[1].value;
        console.log('Your Name:', input0Data, 'And Your Email:', input1Data);
    }
});

window.addEventListener('load', function () {
    console.log('Your Page Fully Loaded!');
});

----------------------------------------------------------------------------
// Adding_new_HTML_element
//Create a new HTML element & set id as box3.2-paragraph
let newElement = document.createElement("p");
newElement.id = "box3.2-paragraph";

//Create new text node which we want as text in a new element
let valueInNewElement = document.createTextNode("lorem2000000000000000");

// Append text node to newly created HTML element as child
newElement.appendChild(valueInNewElement);

// Append this newElement to main parent element <div> by first selecting it
let parentDiv = document.getElementById("box3");
parentDiv.appendChild(newElement);
------------------------------------------------------------------------------
// add new elements before a particular element
//Create a new HTML element & set id as box3.3-paragraph
let newElement2 = document.createElement("p");
newElement2.id = "box3.3-paragraph";

//Create new text node which we want as text in a new element
let valueInNewElement2 = document.createTextNode("lorem1515151515151515151515151515");

// Append text node to newly created HTML element as child
newElement2.appendChild(valueInNewElement2);

// Append this newElement to main parent element <div> by first selecting it
let parentDiv2 = document.getElementById("box3");
parentDiv2.insertBefore(newElement2, parentDiv[0]);
----------------------------------------------------------------



// Removing HTML element

//First select parent from which you want to delete child
var par = document.getElementById("box3");

//Then select a child node which you want to delete
var ch = document.getElementById("box3.2-paragraph");

// Finally simply use the removeChild function
par.removeChild(ch);



// ADD_REMOVE_CLASS(S)
var selected_element = document.getElementById("box6");
console.log(selected_element.classList); // This will print the list of class in selected element. curently only one class present in div

//ADD_CLASS
selected_element.classList.add('shadow') //This will add class shadow to selected div element
console.log(selected_element.classList); // You will see claases printed on console. container and shadow

//REMOVE_CLASS
selected_element.classList.remove('container') //This will remove class container from selected div element
console.log(selected_element.classList); // You will see one printed on console, i.e. shadow


// Get_ELEMENT_STYLE_VALUE
let element = document.getElementById('box6');
// This will print background color because that style is inline.
console.log("Inline CSS: Background color is -> " + element.style.backgroundColor);

// This will print the padding of div which is not part of inline css.
console.log("Non-Inline CSS: Padding is -> " + window.getComputedStyle(element).padding); 
*/