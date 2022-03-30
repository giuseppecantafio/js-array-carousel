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

let currentIndex = 0;

const listaImmagini = document.getElementsByClassName('item');

const items2 = [...items];

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener("click", function () {
    if (currentIndex < 4) {
        listaImmagini[currentIndex].classList.remove("active");
        currentIndex += 1;
        listaImmagini[currentIndex].classList.add("active");
    }

});

prev.addEventListener('click',function() {

    if (currentIndex > 0) {
        listaImmagini[currentIndex].classList.remove("active");
        currentIndex -= 1;
        listaImmagini[currentIndex].classList.add("active");
    }
})