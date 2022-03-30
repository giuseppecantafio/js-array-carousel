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
let currentImage = 0;
let currentImageLaterale = 0;

const listaImmagini = document.getElementsByClassName('item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// INSERISCO IMMAGINI IN ITEM
let currentItems = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
    currentItems[i].innerHTML = `<img src="${items[currentImage]}"/>`;
    currentImage += 1;
}

//INSERISCO LE IMMAGINE NELLA BARRA LATERALE
let currentItems2 = document.querySelectorAll(".item-2");
for (let i = 0; i < items.length; i++) {
    currentItems2[i].innerHTML = `<img src="${items[currentImageLaterale]}"/>`;
    currentImageLaterale += 1;
}

// CAROSELLO IN AVANTI
next.addEventListener("click", function () {
    if (currentIndex < 4) {
        listaImmagini[currentIndex].classList.remove("active");
        currentIndex += 1;
        listaImmagini[currentIndex].classList.add("active");
    }
    
});

//CAROSELLO ALL'INDIETRO
prev.addEventListener('click',function() {

    if (currentIndex > 0) {
        listaImmagini[currentIndex].classList.remove("active");
        currentIndex -= 1;
        listaImmagini[currentIndex].classList.add("active");
    }
});

