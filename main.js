let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let startButton = document.getElementById("startButton");
let intervalInput = document.getElementById("intervalInput");

let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
];
let currentImageIndex = 0;
let imageElement = document.getElementById("image");
let intervalID;

window.onload = function () {
  modal.style.display = "block";
  setBackground();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

startButton.onclick = function () {
  let interval = parseInt(intervalInput.value);
  if (!isNaN(interval) && interval > 0) {
    modal.style.display = "none";
    imageChange(interval * 1000);
  } else {
    alert("Будь ласка, введіть коректний інтервал.");
  }
};

function imageChange(interval) {
  intervalID = setInterval(function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
  }, interval);
}

function setBackground() {
  let currentTime = new Date();
  let hours = currentTime.getHours();

  if (hours >= 6 && hours < 12) {
    document.body.className = "morning";
  } else if (hours >= 12 && hours < 18) {
    document.body.className = "day";
  } else if (hours >= 18 && hours < 21) {
    document.body.className = "evening";
  } else {
    document.body.className = "night";
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTable() {
  const minNum = parseInt(document.getElementById("numberValue1").value);
  const maxNum = parseInt(document.getElementById("numberValue2").value);

  if (isNaN(minNum) || isNaN(maxNum) || minNum >= maxNum) {
    alert("Будь ласка, введіть коректний діапазон.");
    return;
  }

  const table = document.getElementById("specialTable");
  table.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const row = table.insertRow();

    for (let j = 0; j < 10; j++) {
      const cell = row.insertCell();
      const randomNum = getRandomNumber(minNum, maxNum);
      cell.textContent = randomNum;

      if ((i + j) % 2 === 0) {
        cell.classList.add("chessboard-even");
      } else {
        cell.classList.add("chessboard-odd");
      }
    }
  }
}
