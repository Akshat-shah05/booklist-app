//* One class for the Book: author title isbn

class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

//^ One class for the local storage for the book


//# One class for the UI operations
class UI {
    static displayBooks() {
        const books = [
            {
                title: 'book1',
                author: 'john', 
                isbn: 123
            },
            {
                title: 'book2',
                author: 'akshat', 
                isbn: 909
            }
        ]
        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list')

        const row = document.createElement('tr')

        row.innerHTML = `
        
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td> 
        <a href="#" class="btn btn-danger btn-sm delete">X</a>
        </td>

        `
        list.appendChild(row)
    }
}

// static methods are methods that you can use without needed to make an instance of the class
// You can just call the class instead

//* One class to actually display the book

document.addEventListener('DOMContentLoaded', UI.displayBooks)

//^ One class for removing the book

document.addEventListener('submit', function(event) {
    event.preventDefault()

    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    // validation

    if(title === "" || author === "" || isbn === ""){
        alert("Please complete all field")
    }else {

        const book = new Book(title, author, isbn)

        UI.addBookToList(book)
    }
})


//# One class for adding a book




