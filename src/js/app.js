import '../css/style.css';
import '../css/reset.css';

const foodsC = document.getElementById("foods");
const foods = [
  {
    imgSrc: "./assets/img-01.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-02.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-03.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-04.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-05.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
];

for(const food of foods) {
    foodsC.innerHTML += `<article class="food"><img src=${food.imgSrc} alt="food" class="food-img">
                        <div class="food-infos">
                        <h3 class="food-title">${food.title}</h3>
                        <p class="food-description">${food.text}</p>
                        </div>
                        </article>`;
}

  