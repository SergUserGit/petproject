const calcBtn = document.querySelector(".aspect-calc");

calcBtn.addEventListener("click", onClickAspectCalc);

const aspectSun = document.querySelector("#aspect-sun");
const aspectMoon = document.querySelector("#aspect-moon");
const aspectMerk = document.querySelector("#aspect-merk");

const aspectDegrMoon = document.querySelector("#aspect-degr-moon");
const aspectMinMoon = document.querySelector("#aspect-min-moon");

function getDegr(znZodiak) {
  if (znZodiak === "Овен") {
    return 0;
  }
  if (znZodiak === "Тілець") {
    return 30;
  }
  if (znZodiak === "Близнюки") {
    return 60;
  }
  if (znZodiak === "Рак") {
    return 90;
  }
  if (znZodiak === "Лев") {
    return 120;
  }
  if (znZodiak === "Діва") {
    return 150;
  }
  if (znZodiak === "Терези") {
    return 180;
  }
  if (znZodiak === "Скорпіон") {
    return 210;
  }
  if (znZodiak === "Стрілець") {
    return 240;
  }
  if (znZodiak === "Козеріг") {
    return 270;
  }
  if (znZodiak === "Водолій") {
    return 300;
  }
  return 330;
}

function onClickAspectCalc() {
  const a = parseInt(aspectDegrMoon.value);
  const b = parseInt(aspectMinMoon.value);
}
