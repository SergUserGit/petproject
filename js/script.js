const calcBtn = document.querySelector(".aspect-calc");

calcBtn.addEventListener("click", onClickAspectCalc);

const aspectSun = document.querySelector("#aspect-sun");
const aspectMoon = document.querySelector("#aspect-moon");
const aspectMerk = document.querySelector("#aspect-merk");
const aspectVen = document.querySelector("#aspect-ven");
const aspectMars = document.querySelector("#aspect-mars");
const aspectSaturn = document.querySelector("#aspect-saturn");
const aspecJupiter = document.querySelector("#aspect-jupiter");
const aspecUran = document.querySelector("#aspect-uran");
const aspecNeptun = document.querySelector("#aspect-neptun");
const aspecPluton = document.querySelector("#aspect-pluton");

const aspectDegrMoon = document.querySelector("#aspect-degr-moon");
const aspectMinMoon = document.querySelector("#aspect-min-moon");

const aspectDegrSun = document.querySelector("#aspect-degr-sun");
const aspectMinSun = document.querySelector("#aspect-min-sun");

const aspectDegrMerk = document.querySelector("#aspect-degr-merk");
const aspectMinMerk = document.querySelector("#aspect-min-merk");

const aspectDegrVen = document.querySelector("#aspect-degr-ven");
const aspectMinVen = document.querySelector("#aspect-min-ven");

const aspectDegrMars = document.querySelector("#aspect-degr-mars");
const aspectMinMars = document.querySelector("#aspect-min-mars");

const aspectDegrSaturn = document.querySelector("#aspect-degr-saturn");
const aspectMinSaturn = document.querySelector("#aspect-min-saturn");

const aspectDegrJupiter = document.querySelector("#aspect-degr-jupiter");
const aspectMinJupiter = document.querySelector("#aspect-min-jupiter");

const aspectDegrUran = document.querySelector("#aspect-degr-uran");
const aspectMinUran = document.querySelector("#aspect-min-uran");

const aspectDegrNeptun = document.querySelector("#aspect-degr-neptun");
const aspectMinNeptun = document.querySelector("#aspect-min-neptun");

const aspectDegrPluton = document.querySelector("#aspect-degr-pluton");
const aspectMinPluton = document.querySelector("#aspect-min-pluton");

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

function addElemenArray(datePlanet, planet) {
  if (planet === "Солнце") {
    const valueDegrSun = parseInt(aspectDegrSun.value);
    const valueMinSun = parseInt(aspectMinSun.value);
    const planetSun = aspectSun.options[aspectSun.value - 1].textContent;
    const objMoon = {
      planet: "Солнце",
      min: valueMinSun,
      degr: getDegr(planetSun) + valueDegrSun,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Луна") {
    const valueDegrMoon = parseInt(aspectDegrMoon.value);
    const valueMinMoon = parseInt(aspectMinMoon.value);
    const planetMoon = aspectMoon.options[aspectMoon.value - 1].textContent;
    const objMoon = {
      planet: "Луна",
      min: valueMinMoon,
      degr: getDegr(planetMoon) + valueDegrMoon,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Меркурій") {
    const valueDegrMerk = parseInt(aspectDegrMerk.value);
    const valueMinMerk = parseInt(aspectMinMerk.value);
    const planetMerk = aspectMerk.options[aspectMerk.value - 1].textContent;
    const objMoon = {
      planet: "Меркурій",
      min: valueMinMerk,
      degr: getDegr(planetMerk) + valueDegrMerk,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Венера") {
    const valueDegrVen = parseInt(aspectDegrVen.value);
    const valueMinVen = parseInt(aspectMinVen.value);
    const planetVen = aspectVen.options[aspectVen.value - 1].textContent;
    const objMoon = {
      planet: "Венера",
      min: valueMinVen,
      degr: getDegr(planetVen) + valueDegrVen,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Марс") {
    const valueDegrMars = parseInt(aspectDegrMars.value);
    const valueMinMars = parseInt(aspectMinMars.value);
    const planetMars = aspectMars.options[aspectMars.value - 1].textContent;
    const objMoon = {
      planet: "Марс",
      min: valueMinMars,
      degr: getDegr(planetMars) + valueDegrMars,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Сатурн") {
    const valueDegrSaturn = parseInt(aspectDegrSaturn.value);
    const valueMinSaturn = parseInt(aspectMinSaturn.value);
    const planetSaturn =
      aspectSaturn.options[aspectSaturn.value - 1].textContent;
    const objMoon = {
      planet: "Сатурн",
      min: valueMinSaturn,
      degr: getDegr(planetSaturn) + valueDegrSaturn,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Юпітер") {
    const valueDegrJupiter = parseInt(aspectDegrJupiter.value);
    const valueMinJupiter = parseInt(aspectMinJupiter.value);
    const planetJupiter =
      aspecJupiter.options[aspecJupiter.value - 1].textContent;
    const objMoon = {
      planet: "Юпітер",
      min: valueMinJupiter,
      degr: getDegr(planetJupiter) + valueDegrJupiter,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Уран") {
    const valueDegrUran = parseInt(aspectDegrUran.value);
    const valueMinUran = parseInt(aspectMinUran.value);
    const planetUran = aspecUran.options[aspecUran.value - 1].textContent;
    const objMoon = {
      planet: "Уран",
      min: valueMinUran,
      degr: getDegr(planetUran) + valueDegrUran,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Нептун") {
    const valueDegrNeptun = parseInt(aspectDegrNeptun.value);
    const valueMinNeptun = parseInt(aspectMinNeptun.value);
    const planetNeptun = aspecNeptun.options[aspecNeptun.value - 1].textContent;
    const objMoon = {
      planet: "Нептун",
      min: valueMinNeptun,
      degr: getDegr(planetNeptun) + valueDegrNeptun,
    };
    datePlanet.push(objMoon);
  }
  if (planet === "Плутон") {
    const valueDegrPluton = parseInt(aspectDegrPluton.value);
    const valueMinPluton = parseInt(aspectMinPluton.value);
    const planetPluton = aspecPluton.options[aspecPluton.value - 1].textContent;
    const objMoon = {
      planet: "Плутон",
      min: valueMinPluton,
      degr: getDegr(planetPluton) + valueDegrPluton,
    };
    datePlanet.push(objMoon);
  }
}

function onClickAspectCalc() {
  let datePlanet = [];
  addElemenArray(datePlanet, "Солнце");
  addElemenArray(datePlanet, "Луна");
  addElemenArray(datePlanet, "Меркурій");
  addElemenArray(datePlanet, "Венера");
  addElemenArray(datePlanet, "Марс");
  addElemenArray(datePlanet, "Сатурн");
  addElemenArray(datePlanet, "Юпітер");
  addElemenArray(datePlanet, "Уран");
  addElemenArray(datePlanet, "Нептун");
  addElemenArray(datePlanet, "Плутон");

  for (let i = 0; i < datePlanet.length; i += 1) {
    console.log(datePlanet[i]);
  }
  //Собрать данные в массив
  //Перебрать данные в массиве, обработать их, добавить аспекты в другой массив
  //Вывести аспекты в разметеку
}

function getAspect(diffDegr) {
  if (diffDegr >= 54 && diffDegr <= 66) {
    return "cекстиль";
  }
  if (diffDegr >= 114 && diffDegr <= 126) {
    return "тригон";
  }
  if (diffDegr >= -8 && diffDegr <= 8) {
    return "з'єднання";
  }
  if (diffDegr >= 84 && diffDegr <= 96) {
    return "квадратура";
  }
  if (diffDegr >= 172 && diffDegr <= 188) {
    return "оппозиція";
  }
  return "";
}
