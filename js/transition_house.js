const calc_button = document.querySelector(".transit_button_calc");

const planetSunInput = document.querySelector("#aspect-sun");
const planetMonInput = document.querySelector("#aspect-moon");
const planetMerkInput = document.querySelector("#aspect-merk");
const planetVenerInput = document.querySelector("#aspect-vener");
const planetMarsInput = document.querySelector("#aspect-mars");
const planetUpiterInput = document.querySelector("#aspect-yupiter");
const planetSaturnInput = document.querySelector("#aspect-saturn");
const planetUranInput = document.querySelector("#aspect-uran");
const planetNeptnunInput = document.querySelector("#aspect-neptun");
const planetPlutonInput = document.querySelector("#aspect-pluton");

calc_button.addEventListener("click", onClickTransHouseButton);

function addHouseInArray(house, znack, arrayOnHouses) {
  const objZnak = {
    house: house,
    znack: znack,
  };
  arrayOnHouses.push(objZnak);
}

function getArrayHousesInZnZodiak() {
  let arrayOnHouses = [];

  addHouseInArray(1, "Діва", arrayOnHouses);
  addHouseInArray(2, "Терези", arrayOnHouses);
  addHouseInArray(3, "Скорпіон", arrayOnHouses);
  addHouseInArray(4, "Стрілець", arrayOnHouses);
  addHouseInArray(5, "Козеріг", arrayOnHouses);
  addHouseInArray(6, "Водолій", arrayOnHouses);
  addHouseInArray(7, "Риби", arrayOnHouses);
  addHouseInArray(8, "Овен", arrayOnHouses);
  addHouseInArray(9, "Тілець", arrayOnHouses);
  addHouseInArray(10, "Близнюки", arrayOnHouses);
  addHouseInArray(11, "Рак", arrayOnHouses);
  addHouseInArray(12, "Лев", arrayOnHouses);

  return arrayOnHouses;
}

function addPlanetArray(planet, znZodiak, arrayPlanet) {
  const objPlanet = {
    cur_planet: planet,
    cur_zn_zodiak: znZodiak,
  };
  arrayPlanet.push(objPlanet);
}

function getObjectOfValuePlanet() {
  let planetSunValue =
    planetSunInput.options[planetSunInput.value - 1].textContent;

  let planetMonValue =
    planetMonInput.options[planetMonInput.value - 1].textContent;

  let planetMerkValue =
    planetMerkInput.options[planetMerkInput.value - 1].textContent;

  let planetVenerValue =
    planetVenerInput.options[planetVenerInput.value - 1].textContent;

  let planetMarsValue =
    planetMarsInput.options[planetMarsInput.value - 1].textContent;

  let planetUpiterValue =
    planetUpiterInput.options[planetUpiterInput.value - 1].textContent;

  let planetSaturnValue =
    planetSaturnInput.options[planetSaturnInput.value - 1].textContent;

  let planetUranValue =
    planetUranInput.options[planetUranInput.value - 1].textContent;

  let planetNeptunValue =
    planetNeptnunInput.options[planetNeptnunInput.value - 1].textContent;

  let planetPlunonValue =
    planetPlutonInput.options[planetPlutonInput.value - 1].textContent;

  const objValues = {
    planetSunValue,
    planetMonValue,
    planetMerkValue,
    planetVenerValue,
    planetMarsValue,
    planetUpiterValue,
    planetSaturnValue,
    planetUranValue,
    planetNeptunValue,
    planetPlunonValue,
  };
  return objValues;
}

function getArrayPlanetInZnZod() {
  const objOfValues = getObjectOfValuePlanet();

  let arrayPlanet = [];
  addPlanetArray("Сонце", objOfValues.planetSunValue, arrayPlanet);
  addPlanetArray("Місяць", objOfValues.planetMonValue, arrayPlanet);
  addPlanetArray("Меркурій", objOfValues.planetMerkValue, arrayPlanet);
  addPlanetArray("Венера", objOfValues.planetVenerValue, arrayPlanet);
  addPlanetArray("Марс", objOfValues.planetMarsValue, arrayPlanet);
  addPlanetArray("Юпітер", objOfValues.planetUpiterValue, arrayPlanet);
  addPlanetArray("Сатурн", objOfValues.planetSaturnValue, arrayPlanet);
  addPlanetArray("Уран", objOfValues.planetUranValue, arrayPlanet);
  addPlanetArray("Нептун", objOfValues.planetNeptunValue, arrayPlanet);
  addPlanetArray("Плутон", objOfValues.planetPlunonValue, arrayPlanet);
  return arrayPlanet;
}

function onClickTransHouseButton() {
  let totalArray = [];
  const arrayHousesInZnZodiak = getArrayHousesInZnZodiak();
  const arrayPlanetInZnZod = getArrayPlanetInZnZod();
  for (const elemPlamen of arrayPlanetInZnZod) {
    const arrayHouse = arrayHousesInZnZodiak.filter(
      (houseObj) => houseObj.znack === elemPlamen.cur_zn_zodiak
    );

    for (const znHouse of arrayHouse) {
      totalArray.push(
        elemPlamen.cur_planet + " в " + String(znHouse.house) + " будинку"
      );
    }
  }

  const newElemets = document.querySelectorAll(".houses-list > li");
  for (const element of newElemets) {
    element.remove();
  }

  const houseList = document.querySelector(".houses-list");
  for (let k = 0; k < totalArray.length; k += 1) {
    const curElem = totalArray[k];
    let elLi = document.createElement("li");
    elLi.classList.add("house-li");
    let elParagh = document.createElement("p");
    elParagh.classList.add("house-paragh");
    houseList.append(elLi);
    elLi.append(elParagh);
    elParagh.textContent = curElem;
  }
}
