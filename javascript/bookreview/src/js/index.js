import Item from "../../../shoppinglist/src/js/Item";

function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.id = Date.now().toString();
  this.rating = rating;
  this.reviews = [];
}
let filterBook=[];
const BookCollection = {
  books: [],
  addBook: function (book) {
    let bookTitle = document.getElementById("bookTitle").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookRating = document.getElementById("bookRating").value;
    let abook =new Book(bookTitle,bookAuthor,bookRating );
    this.books.push(abook);
    BookCollection.render(this.books);
    console.log(this.books);
    rmAttach();
  },
  removeBook: function (rmid) {
    let bookToRemoved = this.books.findIndex((book) => book.id === rmid);
    if (bookToRemoved ==-1){}
    else{
      let removeBook = this.books.splice(bookToRemoved, 1);
      console.log(removeBook);
      this.render(this.books);
      
    }
  },
  searchBook: function (title) {
    let filterBook = this.book.filter((book) => book.title.includes(title));
    if (filterBook == 0) {
    }else{
      this.render(filterBook);
    }
  },
  render: function (array) {
    let item = "";
    array.forEach((element) => {
      let bookDisplay = `<div>
  <h3>Title:${element.title}</h3>
  <h4>Author:${element.author}</h4>
  <p>Rating:${element.rating}</p>
  <button class="removeButton" id="${element.id}">Remove</button>
  </div>`;
      item += bookDisplay;
    });
    document.getElementById("showBook").innerHTML = item;
  },
};

let addButton = document.getElementById("submitButton");
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  BookCollection.addBook();
});
let searchText = document.getElementById("searchText");
searchText.addEventListener("change", function (e) {
  e.preventDefault();
  BookCollection.searchBook(e.target.value);
});
function rmAttach() {
  let rmButton = document.querySelectorAll(".removeButton");
  rmButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.id);
      BookCollection.removeBook(btn.id);
    });
  });
};
