//layer one
const layerOne = document.getElementById("layer-one");
const myButtons = document.getElementsByClassName("block");
const firstHeading = document.getElementById("first-heading");


//layer two
const layerTwo = document.getElementById("layer-two");
const myButtonsLayerTwo = document.getElementsByClassName("block-2");
const secondHeading = document.getElementById("second-heading");


//layer three
const layerThree = document.getElementById("layer-three");
const myButtonsLayerThree = document.getElementsByClassName("fortune");
const thirdHeading = document.getElementById("third-heading");


function loopThroughColors() {
  const changeColor = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < this.textContent.length; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function changeLayerOne() {
  const swap = () => {
    layerOne.classList.add("hide1");
    firstHeading.classList.add("hide1");
    layerTwo.classList.remove("hide1");
    secondHeading.classList.remove("hide1");

  }
  setTimeout(swap, this.textContent.length * 2 * 1000);

};


function loopThroughNumbers() {
  const changeColor = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < this.textContent.length; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function changeLayerTwo() {
  const swap = () => {
    layerTwo.classList.add("hide2");
    secondHeading.classList.add("hide2");
    layerThree.classList.remove("hide2");
    thirdHeading.classList.remove("hide2");
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);

};



for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", loopThroughColors);
  myButtons[i].addEventListener("click", changeLayerOne);
  myButtonsLayerTwo[i].addEventListener("click", loopThroughNumbers);
  myButtonsLayerTwo[i].addEventListener("click", changeLayerTwo);
};
