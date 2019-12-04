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

  //layer one variables
  var layerOne = document.getElementById("layer-one");
  var myButtons = document.getElementsByClassName("block");
  var firstHeading = document.getElementById("first-heading");

  //layer two variables
  var layerTwo = document.getElementById("layer-two");
  var oneButton = document.getElementById("greentext");
  var twoButton = document.getElementById("bluetext");
  var threeButton = document.getElementById("pinktext");
  var fourButton = document.getElementById("orangetext");
  var secondHeading = document.getElementById("second-heading");

  //layer three variables
  var layerThree = document.getElementById("layer-three");
  var myButtonsLayerThree = document.getElementsByClassName("fortune");
  var thirdHeading = document.getElementById("third-heading");

  // blinking colors first layer
  function loopThroughColors() {
    var _this = this;

    var changeColor = function changeColor() {
      _this.classList.toggle("blink");
    };
    for (var i = 0; i < this.textContent.length * 2; i++) {
      setTimeout(changeColor, i * 1000);
    }
  };

  // change layers
  function changeLayerOne() {
    var swap = function swap() {
      layerOne.classList.add("hide1");
      firstHeading.classList.add("hide1");
      layerTwo.classList.remove("hide1");
      secondHeading.classList.remove("hide1");
    };
    setTimeout(swap, this.textContent.length * 2 * 1000);
  };

  //button clicks first layer
  for (var i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", loopThroughColors);
    myButtons[i].addEventListener("click", changeLayerOne);
  };

  // blinking numbers
  function loopOne() {
    var _this2 = this;

    var fade = function fade() {
      _this2.classList.toggle("blink");
    };
    for (var _i = 0; _i < 1 * 2; _i++) {
      setTimeout(fade, _i * 1000);
    }
  };

  function loopTwo() {
    var _this3 = this;

    var two = function two() {
      _this3.classList.toggle("blink");
    };
    for (var _i2 = 0; _i2 < 2 * 2; _i2++) {
      setTimeout(two, _i2 * 1000);
    }
  };

  function loopThree() {
    var _this4 = this;

    var three = function three() {
      _this4.classList.toggle("blink");
    };
    for (var _i3 = 0; _i3 < 3 * 2; _i3++) {
      setTimeout(three, _i3 * 500);
    }
  };

  function loopFour() {
    var _this5 = this;

    var four = function four() {
      _this5.classList.toggle("blink");
    };
    for (var _i4 = 0; _i4 < 4 * 2; _i4++) {
      setTimeout(four, _i4 * 500);
    }
  };

  // change layers
  function changeLayerTwo() {
    var swap = function swap() {
      layerTwo.classList.add("hide1");
      secondHeading.classList.add("hide1");
      layerThree.classList.remove("hide2");
      thirdHeading.classList.remove("hide2");
    };
    setTimeout(swap, 4 * 1000);
  };

  //button clicks second layer
  oneButton.addEventListener("click", loopOne);
  twoButton.addEventListener("click", loopTwo);
  threeButton.addEventListener("click", loopThree);
  fourButton.addEventListener("click", loopFour);
  layerTwo.addEventListener("click", changeLayerTwo);

  //random fortune
  var fortunes = ["You will reach the height of success in whatever you do.", "Everything will now come your way.", "A cheerful letter or message is on its way to you.", "An idea is not responsible for the people who believe in it.", "Open up your heart - it can always be closed again.", "Dream your dream and your dream will dream of you.", "Be definite now, worry about precision later.", "Demonstrate refinement in everything you do.", "Do what you can to prolong your life, in the hope that someday you'll learn what it's for.", "You will enjoy good health, you will be surrounded by luxury."];

  layerTwo.addEventListener("click", function () {
    var fortune_spot = document.getElementsByClassName("fortune-text");
    var rand_int = Math.floor(Math.random() * 10);
    fortune_spot.innerHTML = fortunes[rand_int];
  }, false);
});