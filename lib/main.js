(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.main = mod.exports;
  }
})(this, function () {
  "use strict";

  //layer one
  var layerOne = document.getElementById("layer-one");
  var myButtons = document.getElementsByClassName("block");
  var firstHeading = document.getElementById("first-heading");

  //layer two
  var layerTwo = document.getElementById("layer-two");
  var myButtonsLayerTwo = document.getElementsByClassName("block-2");
  var secondHeading = document.getElementById("second-heading");

  //layer three
  var layerThree = document.getElementById("layer-three");
  var myButtonsLayerThree = document.getElementsByClassName("fortune");
  var thirdHeading = document.getElementById("third-heading");

  function loopThroughColors() {
    var _this = this;

    var changeColor = function changeColor() {
      _this.classList.toggle("blink");
    };
    for (var i = 0; i < this.textContent.length; i++) {
      setTimeout(changeColor, i * 1000);
    }
  };

  function changeLayerOne() {
    var swap = function swap() {
      layerOne.classList.add("hide1");
      firstHeading.classList.add("hide1");
      layerTwo.classList.remove("hide1");
      secondHeading.classList.remove("hide1");
    };
    setTimeout(swap, this.textContent.length * 2 * 1000);
  };

  function loopThroughNumbers() {
    var _this2 = this;

    var changeColor = function changeColor() {
      _this2.classList.toggle("blink");
    };
    for (var i = 0; i < this.textContent.length; i++) {
      setTimeout(changeColor, i * 1000);
    }
  };

  function changeLayerTwo() {
    var swap = function swap() {
      layerTwo.classList.add("hide2");
      secondHeading.classList.add("hide2");
      layerThree.classList.remove("hide2");
      thirdHeading.classList.remove("hide2");
    };
    setTimeout(swap, this.textContent.length * 2 * 1000);
  };

  for (var i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", loopThroughColors);
    myButtons[i].addEventListener("click", changeLayerOne);
    myButtonsLayerTwo[i].addEventListener("click", loopThroughNumbers);
    myButtonsLayerTwo[i].addEventListener("click", changeLayerTwo);
  };
});