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

const planetHouseOneInput = document.querySelector("#aspect-houseone");
const planetHouseTwoInput = document.querySelector("#aspect-housetwo");
const planetHouseThreeInput = document.querySelector("#aspect-housethree");
const planetHouseFourInput = document.querySelector("#aspect-housefour");
const planetHouseFiveInput = document.querySelector("#aspect-housefive");
const planetHouseSixInput = document.querySelector("#aspect-housesix");
const planetHouseSevenInput = document.querySelector("#aspect-houseseven");
const planetHouseEightInput = document.querySelector("#aspect-houseeight");
const planetHouseNineInput = document.querySelector("#aspect-housenine");
const planetHouseTenInput = document.querySelector("#aspect-houseten");
const planetHouseElewenInput = document.querySelector("#aspect-houseelewen");
const planetHouseTweleveInput = document.querySelector("#aspect-housetwelve");

calc_button.addEventListener("click", onClickTransHouseButton);

function addHouseInArray(house, znack, arrayOnHouses) {
  const objZnak = {
    house: house,
    znack: znack,
  };
  arrayOnHouses.push(objZnak);
}

function getObjectValuesHouses() {
  let planetHouseOneValue =
    planetHouseOneInput.options[planetHouseOneInput.value - 1].textContent;

  let planetHouseTwoValue =
    planetHouseTwoInput.options[planetHouseTwoInput.value - 1].textContent;

  let planetHouseThreeValue =
    planetHouseThreeInput.options[planetHouseThreeInput.value - 1].textContent;

  let planetHouseFourValue =
    planetHouseFourInput.options[planetHouseFourInput.value - 1].textContent;

  let planetHouseFiveValue =
    planetHouseFiveInput.options[planetHouseFiveInput.value - 1].textContent;

  let planetHouseSixValue =
    planetHouseSixInput.options[planetHouseSixInput.value - 1].textContent;

  let planetHouseSevenValue =
    planetHouseSevenInput.options[planetHouseSevenInput.value - 1].textContent;

  let planetHouseEightValue =
    planetHouseEightInput.options[planetHouseEightInput.value - 1].textContent;

  let planetHouseNineValue =
    planetHouseNineInput.options[planetHouseNineInput.value - 1].textContent;

  let planetHouseTenValue =
    planetHouseTenInput.options[planetHouseTenInput.value - 1].textContent;

  let planetHouseElevenValue =
    planetHouseElewenInput.options[planetHouseElewenInput.value - 1]
      .textContent;

  let planetHouseTwelveValue =
    planetHouseTweleveInput.options[planetHouseTweleveInput.value - 1]
      .textContent;

  const objValues = {
    planetHouseOneValue,
    planetHouseTwoValue,
    planetHouseThreeValue,
    planetHouseFourValue,
    planetHouseFiveValue,
    planetHouseSixValue,
    planetHouseSevenValue,
    planetHouseEightValue,
    planetHouseNineValue,
    planetHouseTenValue,
    planetHouseElevenValue,
    planetHouseTwelveValue,
  };

  return objValues;
}

function getArrayHousesInZnZodiak() {
  const valuesHouses = getObjectValuesHouses();

  let arrayOnHouses = [];

  addHouseInArray(1, valuesHouses.planetHouseOneValue, arrayOnHouses);
  addHouseInArray(2, valuesHouses.planetHouseTwoValue, arrayOnHouses);
  addHouseInArray(3, valuesHouses.planetHouseThreeValue, arrayOnHouses);
  addHouseInArray(4, valuesHouses.planetHouseFourValue, arrayOnHouses);
  addHouseInArray(5, valuesHouses.planetHouseFiveValue, arrayOnHouses);
  addHouseInArray(6, valuesHouses.planetHouseSixValue, arrayOnHouses);
  addHouseInArray(7, valuesHouses.planetHouseSevenValue, arrayOnHouses);
  addHouseInArray(8, valuesHouses.planetHouseEightValue, arrayOnHouses);
  addHouseInArray(9, valuesHouses.planetHouseNineValue, arrayOnHouses);
  addHouseInArray(10, valuesHouses.planetHouseTenValue, arrayOnHouses);
  addHouseInArray(11, valuesHouses.planetHouseElevenValue, arrayOnHouses);
  addHouseInArray(12, valuesHouses.planetHouseTwelveValue, arrayOnHouses);

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
