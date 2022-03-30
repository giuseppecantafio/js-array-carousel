const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// VARIABILI ZERO GENERALI
let currentIndex = 0;


// INSERISCO IMMAGINI E HTML
const listaImmagini = document.getElementsByClassName('item');
let currentItems = document.querySelectorAll(".item");
let currentItems2 = document.querySelectorAll(".item-2");

let currentImage = 0;
let currentImageLaterale = 0;

for (let i = 0; i < items.length; i++) {
    currentItems[i].innerHTML = `<img src="${items[currentImage]}"/> <div class="text-container"><p class="title"></p>
    <p class="text"></p></div>`;
    currentImage += 1;
};
for (let i = 0; i < items.length; i++) {
    currentItems2[i].innerHTML = `<img src="${items[currentImageLaterale]}"/>`;
    currentImageLaterale += 1;
};


// INSERISCO TITOLO E TESTO

let currentTitle = 0;
let pTitle = document.querySelectorAll(".title");

let currentText = 0;
let pText = document.querySelectorAll(".text");

for (let i = 0; i < title.length; i++) {
    pTitle[i].innerHTML = `${title[currentTitle]}`;
    currentTitle += 1;
};
for (let i = 0; i < text.length; i++) {
    pText[i].innerHTML = `${text[currentText]}`;
    currentText += 1;
};


// CAROSELLO IN AVANTI
const next = document.querySelector('.next');
next.addEventListener("click", function () {
    if (currentIndex < 4) {
        listaImmagini[currentIndex].classList.remove("active");
        currentIndex += 1;
        listaImmagini[currentIndex].classList.add("active");
    } 
    
});


//CAROSELLO ALL'INDIETRO
const prev = document.querySelector('.prev');
prev.addEventListener('click',function() {

    if (currentIndex > 0) {
        listaImmagini[currentIndex].classList.remove("active");
        currentIndex -= 1;
        listaImmagini[currentIndex].classList.add("active");
    }
});

