//Card Number
var countKey = 0;
function validate(evt) {
  var theEvent = evt;
  var key = theEvent.key;
  var regex = /[0-9]|\./;
  if (!regex.test(key) && key != "Backspace") {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    if (countKey > 0 && key == "Backspace") {
      document.querySelector(`.cardNumber${countKey}`).style.transform =
        "translateY(0%)";
      document.querySelector(`.cardNumber${countKey}`).style.opacity = "1";
      document.querySelector(
        `#invisible .cardNumber${countKey}`
      ).style.opacity = "0";
      document.querySelector(
        `#invisible .cardNumber${countKey}`
      ).style.transform = "translateY(0%)";
      countKey--;
      if (countKey % 4 == 0) {
        document.getElementById("cardNumberInput").value = document
          .getElementById("cardNumberInput")
          .value.slice(0, -1);
        console.log(document.getElementById("cardNumberInput").value);
      }
    }
    if (key != "Backspace" && countKey < 16) {
      countKey++;
      document.querySelector(
        `#visible   .cardNumber${countKey}`
      ).style.transform = "translateY(-40%)";
      document.querySelector(
        `#visible   .cardNumber${countKey}`
      ).style.opacity = "0";
      document.querySelector(
        `#invisible .cardNumber${countKey}`
      ).style.opacity = "1";
      document.querySelector(
        `#invisible .cardNumber${countKey}`
      ).style.transform = "translateY(-40%)";
      document.querySelector(`#invisible .cardNumber${countKey}`).innerHTML =
        key;
      if ((countKey - 1) % 4 == 0) {
        document.getElementById("cardNumberInput").value += " ";
      }
    } else {
      if (key != "Backspace") {
        theEvent.returnValue = false;
      }
    }
  }
}

//Card Name
function letter(evt) {
  var theEvent = evt;
  var key = theEvent.key.toUpperCase();
  console.log(key, theEvent);
  var regex = /[a-z A-Z]/;
  if (
    !regex.test(key) &&
    key != "BACKSPACE" &&
    document.getElementById("fullName").innerHTML.length > 5
  ) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    if (key == "BACKSPACE") {
      document.getElementById("fullName").innerHTML = document
        .getElementById("fullName")
        .innerHTML.slice(0, -1);
    }
    console.log(document.getElementById("fullName").innerHTML.length);
    if (key.length < 2) {
      if (document.getElementById("fullName").innerHTML == "AD SOYAD") {
        document.getElementById("fullName").innerHTML = "";
      } else {
        if (document.getElementById("fullName").innerText.length < 17) {
          document.getElementById("fullName").innerHTML += key;
        } else {
          if (key != "BACKSPACE") {
            theEvent.returnValue = false;
          }
        }
      }
    }
  }
}

//Month and Year
function getMonth() {
  let month = document.getElementById("month").value;
  document.getElementById("date_month").innerHTML = month;
}
function getYear() {
  let year = document.getElementById("year").value;
  document.getElementById("date_year").innerHTML = year;
}
//Cvv
var countKey1 = 0;
function cvv(evt) {
  var theEvent = evt;
  var key = theEvent.key;
  var regex = /[0-9]|\./;
  if (!regex.test(key) && key != "Backspace") {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    if (countKey1 > 0 && key == "Backspace") {
      console.log("sill");
      document.getElementById("backCvv").innerHTML = document
        .getElementById("backCvv")
        .innerHTML.slice(0, -1);
      countKey1--;
    }
    if (key != "Backspace" && countKey1 < 4) {
      countKey1++;
      document.getElementById("backCvv").innerHTML += key;
    } else {
      if (key != "Backspace") {
        theEvent.returnValue = false;
      }
    }
  }
}
//Out Cvv
document.addEventListener("keyup", myfunc);
function myfunc(event) {
  if (event.key == "Escape" || event === true) {
    document.getElementById("card").style.transform = "rotate3d(0, 0, 0, 0)";
    document.getElementById("border").style.opacity = "1";
    document.getElementById("chip").style.opacity = "1";
    document.getElementById("visa").style.opacity = "1";
    document.getElementById("visible").style.opacity = "1";
    document.getElementById("empires").style.opacity = "1";
    document.getElementById("title").style.opacity = "1";
    document.getElementById("cardBackgroundBlack").style.opacity = "0";
    document.getElementById("backCvv").style.opacity = "0";
    document.getElementById("backCvvTitle").style.opacity = "0";
    document.getElementById("cardBackgroundCvv").style.opacity = "0";
  }
}
//Rotate y
function rotate() {
  if (document.getElementById("border").style.opacity != "0") {
    document.getElementById("border").style.opacity = "0";
    document.getElementById("chip").style.opacity = "0";
    document.getElementById("visa").style.opacity = "0";
    document.getElementById("visible").style.opacity = "0";
    document.getElementById("empires").style.opacity = "0";
    document.getElementById("title").style.opacity = "0";
    document.getElementById("card").style.position = "normal";
    document.getElementById("card").style.transform =
      "rotate3d(0, 1, 0, 180deg)";
  }

  html = `
  <div id="cardBackgroundBlack"></div>
  <span id="backCvvTitle">CVV</span>
  <span id="backCvv"></span>
  <div id="cardBackgroundCvv"></div>
  `;
  if (document.getElementById("card").children[0].id != "cardBackgroundBlack") {
    document.getElementById("card").insertAdjacentHTML("afterbegin", html);
  }
  document.getElementById("cardBackgroundBlack").style.opacity = "0";
  document.getElementById("cardBackgroundCvv").style.opacity = "0";
  document.getElementById("backCvv").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("cardBackgroundBlack").style.opacity = "1";
    document.getElementById("cardBackgroundCvv").style.opacity = "1";
    document.getElementById("backCvv").style.opacity = "1";
  }, 400);
}

//Border set
function borderNumber() {
  document.getElementById("border").style.width = "90%";
  document.getElementById("border").style.bottom = "7.5rem";
  document.getElementById("border").style.left = "1.3rem";
  myfunc(true);

}
function borderName() {
  
  document.getElementById("border").style.width = "60%";
  document.getElementById("border").style.bottom = "1.5rem";
  document.getElementById("border").style.left = "1.3rem";
  myfunc(true);
}
function borderMonth(event) {
  document.getElementById("border").style.width = "30%";
  document.getElementById("border").style.bottom = "1.5rem";
  document.getElementById("border").style.left = "24rem";
  myfunc(true);

}
