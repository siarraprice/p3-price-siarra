//layer one
const layerOne = document.getElementById("layer-one");
const myButtons = document.getElementsByClassName("block");


//layer two
const layerTwo = document.getElementById("layer-two");
const myButtonsLayerTwo = document.getElementsByClassName("block-2");

//layer three
const layerThree = document.getElementById("layer-three");
const myButtonsLayerThree = document.getElementsByClassName("fortune");


function loopThrough() {
  const changeColor = () => {
    this.classList.toggle("blink");
  };
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


function changeLayer() {
  const swap = () => {
    layerOne.classList.add("hide");
    layerTwo.classList.remove("hide");
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);

};



for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", loopThrough);
  myButtons[i].addEventListener("click", changeLayer);
};
