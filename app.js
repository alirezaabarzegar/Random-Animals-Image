


let fox = document.querySelector(".fox");
let dog = document.querySelector(".dog");


const foxBtn = document.querySelector(".get-fox");
const dogBtn = document.querySelector(".get-dog");

foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

// ----------------------------------------------------Get Random Cat Images


function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      cat.innerHTML = `<img src="${responseData.file}" />`;
    });
}

// ----------------------------------------------------Get Random Fox Images
function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((responseData) => {
 
      fox.innerHTML = `<img src="${responseData.image}" />`;
    });
}

// ----------------------------------------------------Get Random Dog Images

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((responseData) => {
      dog.innerHTML = `<img src="${responseData.url}" />`;
    });
}
