//layer one variables
const layerOne = document.getElementById("layer-one");
const myButtons = document.getElementsByClassName("block");
const firstHeading = document.getElementById("first-heading");


//layer two variables
const layerTwo = document.getElementById("layer-two");
const oneButton = document.getElementById("greentext")
const twoButton = document.getElementById("bluetext")
const threeButton = document.getElementById("pinktext")
const fourButton = document.getElementById("orangetext")
const secondHeading = document.getElementById("second-heading");


//layer three variables
const layerThree = document.getElementById("layer-three");
const myButtonsLayerThree = document.getElementsByClassName("fortune");
const thirdHeading = document.getElementById("third-heading");

// blinking colors first layer
function loopThroughColors() {
  const changeColor = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

// change layers
function changeLayerOne() {
  const swap = () => {
    layerOne.classList.add("hide1");
    firstHeading.classList.add("hide1");
    layerTwo.classList.remove("hide1");
    secondHeading.classList.remove("hide1");

  }
  setTimeout(swap, this.textContent.length * 2 * 1000);

};

//button clicks first layer
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", loopThroughColors);
  myButtons[i].addEventListener("click", changeLayerOne);
};



// blinking numbers
function loopOne() {
  const fade = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < 1 * 2; i++) {
    setTimeout(fade, i * 1000);
  }
};

function loopTwo() {
  const two = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < 2 * 2; i++) {
    setTimeout(two, i * 1000);
  }
};

function loopThree() {
  const three = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < 3 * 2; i++) {
    setTimeout(three, i * 500);
  }
};

function loopFour() {
  const four = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < 4 * 2; i++) {
    setTimeout(four, i * 500);
  }
};

// change layers
function changeLayerTwo() {
  const swap = () => {
    layerTwo.classList.add("hide1");
    secondHeading.classList.add("hide1");
    layerThree.classList.remove("hide2");
    thirdHeading.classList.remove("hide2");

  }
  setTimeout(swap, 4 * 1000);

};

//button clicks second layer
oneButton.addEventListener("click", loopOne);
twoButton.addEventListener("click", loopTwo);
threeButton.addEventListener("click", loopThree);
fourButton.addEventListener("click", loopFour);
layerTwo.addEventListener("click", changeLayerTwo);




//random fortune
var fortunes = [
"You will reach the height of success in whatever you do.",
"Everything will now come your way.",
"A cheerful letter or message is on its way to you.",
"An idea is not responsible for the people who believe in it.",
"Open up your heart - it can always be closed again.",
"Dream your dream and your dream will dream of you.",
"Be definite now, worry about precision later.",
"Demonstrate refinement in everything you do.",
"Do what you can to prolong your life, in the hope that someday you'll learn what it's for.",
"You will enjoy good health, you will be surrounded by luxury."
];

var fortune_spot = document.getElementById("fortune-text");
var rand_int = Math.floor(Math.random () * 10);
fortune_spot.innerHTML = fortunes[rand_int];
