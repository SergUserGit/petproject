const calc_button = document.querySelector(".transit_button_calc");

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

function getArrayPlanetInZnZod() {
  let arrayPlanet = [];
  addPlanetArray("Сонце", "Водолій", arrayPlanet);
  addPlanetArray("Місяць", "Стрілець", arrayPlanet);
  addPlanetArray("Меркурій", "Козеріг", arrayPlanet);
  addPlanetArray("Венера", "Риби", arrayPlanet);
  addPlanetArray("Марс", "Рак", arrayPlanet);
  addPlanetArray("Юпітер", "Близнюки", arrayPlanet);
  addPlanetArray("Сатурн", "Риби", arrayPlanet);
  addPlanetArray("Уран", "Тілець", arrayPlanet);
  addPlanetArray("Нептун", "Риби", arrayPlanet);
  addPlanetArray("Плутон", "Водолій", arrayPlanet);
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
