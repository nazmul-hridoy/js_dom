/*
1.DOM SELECTION-- select html element
2.EVENT LISTENER -- event listener is a procedure in JavaScript that waits for an event to occur. ex: CLICk
3.BASIC VALIDATION
4.CREATE ELEMENT
5. APPEND IN UI
*/

//1. DOM SELECTION
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

//2. EVENT LISTENER
btn.addEventListener('click', function (event) {
    event.preventDefault()


    //3.BASIC VALIDATION
    if (title.value == "" && author.value == "" && year.value == "") {
        alert("INPUT VALUE IN ALL FIELDS")
    }
    else {
        //4.CREATE ELEMENT
        const newRow = document.createElement('tr');

        //creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        //creating new author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        //creating new year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);


        //5. APPEND IN UI
        bookList.appendChild(newRow);
    }
})


