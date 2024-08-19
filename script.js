

const myLibrary = [];

/* title: "Groundhog Day",
    year: 1993,
    director: "Harold Ramis",
    rating: "8/10" */

// declare variables

const form = document.getElementById('pop-up-form');




function Movie(title, year, director, rating) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.rating = rating;
}

function addMovieToLibrary() {
    let title = document.getElementById("popup-title").value; // takes input value and assigns it to property
    let year = document.getElementById("popup-year").value; // declare variables of object
    let director = document.getElementById("popup-director").value;
    let rating = document.getElementById("popup-rating").value;
    let newMovie = new Movie(title, year, director, rating); // instantiates new object
    myLibrary.push(newMovie); // adds new object to array
    displayMovie(myLibrary); // displays onto webpage
}



function displayMovie(arr) {

    const dynamicContent = document.querySelector(".dynamic-content");
    dynamicContent.innerHTML = '';
    
for(let i = 0; i < arr.length; i++) {

    
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("movie-card");
    dynamicContent.appendChild(cardDiv);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("card-image");
    const image = document.createElement("img");
    image.setAttribute('src', "");
    imgDiv.appendChild(image);
    cardDiv.appendChild(imgDiv);

    const textDiv = document.createElement("div");
    textDiv.classList.add("card-text");
    cardDiv.appendChild(textDiv);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("movie-title");
    titleDiv.innerHTML = `<strong>${arr[i].title}</strong>`;
    console.log(titleDiv.innerHTML);
    textDiv.appendChild(titleDiv);

    const yearDiv = document.createElement("div");
    yearDiv.classList.add("movie-year");
    yearDiv.innerHTML = `Year Released: ${arr[i].year}`;
    console.log(yearDiv.innerHTML);
    textDiv.appendChild(yearDiv);

    const directorDiv = document.createElement("div");
    directorDiv.classList.add("movie-director");
    directorDiv.innerHTML = `Director: ${arr[i].director}`;
    console.log(directorDiv.innerHTML);
    textDiv.appendChild(directorDiv);

    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("movie-rating");
    ratingDiv.innerHTML = `IMDB Rating: ${arr[i].rating}`;
    console.log(ratingDiv.innerHTML);
    textDiv.appendChild(ratingDiv);

    const seenDiv = document.createElement("div");
    seenDiv.classList.add("movie-watched");
    seenDiv.innerHTML = "Already seen?";
    textDiv.appendChild(seenDiv);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");

    label.classList.add("switch");
    checkbox.setAttribute("type", "checkbox");
    label.appendChild(checkbox);

    span.classList.add("slider-round");
    label.appendChild(span);
    textDiv.appendChild(label);

    const removeBtn = document.createElement("button");
    removeBtn.id = "remove-movie-button";
    removeBtn.innerHTML = "Remove";
    cardDiv.appendChild(removeBtn);
}
}


displayMovie(myLibrary);


// Button to remove a specific movie div from display when clicked 

document.addEventListener('click', function (e) {
    if (e.target.matches('#remove-movie-button')) // specifies target div (e.target)

    e.target.parentNode.remove() // target parent node => target <div class="movie-card">

  }, false); // condition must be fulfilled in order for method to operate


/*
function removeBook(arr, book) {
    let index = arr.indexOf(book);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
} */

// POP UP FORM //

// add functions to show and hide pop up form

const popupOverlay = document.getElementById('popupOverlay');
const addMovieBtn = document.getElementById('add-movie-button');

addMovieBtn.addEventListener("click", showPopUp);

function showPopUp() {
    popupOverlay.style.display = 'block';
}
  
function hidePopUp() {
    popupOverlay.style.display = 'none';
    document.getElementById("popup-title").value = "";
    document.getElementById("popup-year").value = "2024";
    document.getElementById("popup-director").value = "";
    document.getElementById("popup-rating").value = "";
}


// Submit form and add movie to display grid

const submitBtn = document.querySelector('.btn-submit-popup');

// MUST do onclick otherwsie input values are grabbed when the fields are empty

submitBtn.onclick = function(event) {
    event.preventDefault();
    addMovieToLibrary();
    hidePopUp();
}

// when 'submit' is pressed, it attempts to send the data to a server
// event.preventDefault() => default action should not take place if the event is not explicitly handled 
