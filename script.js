const myLibrary = [];


// constructor allows books objects to be created easily
// function Book(name) {
//     this.name = name;
// }





// Book.prototype.toggleRead = function() {
//     if(myObj.read === 'yes'){
//         myObj['read'] = 'no';
//         node5.nodeValue = 'no';

//     } else if(myObj.read === 'no'){
//         myObj['read'] = 'yes';
//         node5.nodeValue = 'yes';

//     }


// }



 class Book {
    constructor(name, author, pages, genre, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.read = read;
        this.id = crypto.randomUUID();

    }




    
}


let theCreativeAct = new Book('The Creative Act');
let eastOfEden = new Book('East of Eden');


// take book object as well as pages id and store in a array
// manipulate book object then store in array


function addBookToLibrary(book){
    myLibrary.push(book);

}


// addBookToLibrary('Rick Rubin', theCreativeAct, 250, 'non-fiction', 'Yes');
// addBookToLibrary('John Steinbeck', eastOfEden, 450, 'fiction', 'Yes');


console.log(myLibrary)

for(let i = 0; i < myLibrary.length; i++){
    // let div = document.createElement('div');
    let element = document.getElementById('div1');
    // element.appendChild(div)
    let para = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p');
    let para4 = document.createElement('p');
    let para5 = document.createElement('p');

    let node = document.createTextNode(myLibrary[i].author);
    let node2 = document.createTextNode(myLibrary[i].name);
    let node3 = document.createTextNode(myLibrary[i].pages);
    let node4 = document.createTextNode(myLibrary[i].genre);
    let node5 = document.createTextNode(myLibrary[i].read);



    para.appendChild(node);
    para2.appendChild(node2);
    para3.appendChild(node3);
    para4.appendChild(node4);
    para5.appendChild(node5);




    element.appendChild(para);
    element.appendChild(para2);
    element.appendChild(para3);
    element.appendChild(para4);
    element.appendChild(para5);




    


}


let addBookButton = document.querySelector('#new-book-button');
let modal = document.querySelector('#modal')



addBookButton.addEventListener('click', () => {
    modal.showModal()
})









let modalClose = document.querySelector('#modal-close-button');

modalClose.addEventListener('click', () => {
    modal.close();
})

// makes character after 'space' upper case
function capitalizeAfterChar(str, charToFollow) {
    const regex = new RegExp(`(?<=${charToFollow})\\w`, 'g');
    return str.replace(regex, (match) => match.toUpperCase());
}


let onSubmit = document.querySelector('#on-submit');
// create event listener for submit button
onSubmit.addEventListener('click', () => {
    let bookName = document.querySelector('#book_name').value;
    let authorName = document.querySelector('#author_name').value;
    let numPages = document.querySelector('#num_of_pages').value;
    let genre = document.querySelector('#genre').value;
    let read = document.querySelector('#read').value;
    // let bookNameValue = bookName.value;


    let a = new Book(bookName, authorName, numPages, genre, read);

    addBookToLibrary(a);



    let element = document.getElementById('div1');
    // element.appendChild(div)
    let para = document.createElement('p');
    let para2 = document.createElement('p');
    let authorContainer = document.createElement('div');
    let para3 = document.createElement('p');
    let para4 = document.createElement('p');
    let para5 = document.createElement('p');
    let readContainer = document.createElement('div');

    para.setAttribute('data-book-id', myLibrary[myLibrary.length - 1].id);
    para2.setAttribute('data-book-id', myLibrary[myLibrary.length - 1].id); 
    authorContainer.setAttribute('data-book-id', myLibrary[myLibrary.length - 1].id); 
    para3.setAttribute('data-book-id', myLibrary[myLibrary.length - 1].id); 
    para4.setAttribute('data-book-id', myLibrary[myLibrary.length - 1].id); 
    para5.setAttribute('data-book-id', myLibrary[myLibrary.length - 1].id); 


    let node = document.createTextNode(myLibrary[myLibrary.length - 1].author);
    let node2 = document.createTextNode(myLibrary[myLibrary.length - 1].name);
    let node3 = document.createTextNode(myLibrary[myLibrary.length - 1].pages);
    let node4 = document.createTextNode(myLibrary[myLibrary.length - 1].genre);
    let node5 = document.createTextNode(myLibrary[myLibrary.length - 1].read);


    let deleteNode = document.createElement('button');
    let deleteNodeText = document.createTextNode('x');
    deleteNode.appendChild(deleteNodeText);

    deleteNode.addEventListener('click', () => {
        indexToDelete = myLibrary.findIndex(item => item.id === para.getAttribute('data-book-id'));
        myLibrary.splice(indexToDelete, 1)
        
        para.remove();
        authorContainer.remove();
        para2.remove();
        para3.remove();
        para4.remove();
        para5.remove();
        readContainer.remove();


        
    })

    let toggleReadButton = document.createElement('button')
    // let toggleReadButtonText = document.createTextNode('yes');
    toggleReadButton.appendChild(node5);

// add a function on book prototype 






let myObj = myLibrary[myLibrary.length - 1];

Book.prototype.toggleRead = function(){
        if(myObj.read === 'yes'){
            myObj['read'] = 'no';
            node5.nodeValue = 'no';
        } else if (myObj.read === 'no'){
            myObj['read'] = 'yes';
            node5.nodeValue = 'yes';
        }
    }


toggleReadButton.addEventListener('click', () => {
   myObj.toggleRead();
   
})





    // para.appendChild(deleteNode);
    para.appendChild(node);
    authorContainer.appendChild(deleteNode);
    authorContainer.appendChild(para);

    para2.appendChild(node2);
    para3.appendChild(node3);
    para4.appendChild(node4);
    // readContainer.appendChild(node5);
    readContainer.appendChild(toggleReadButton);



    element.appendChild(authorContainer);
    // element.appendChild(para);
    element.appendChild(para2);
    element.appendChild(para3);
    element.appendChild(para4);
    element.appendChild(readContainer);

 





});
















