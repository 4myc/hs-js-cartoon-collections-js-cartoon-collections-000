function dwarfRollCall(dwarves) {
  var dwarfNames = [];
  for (let i = 0; i < dwarves.length; i++) {
    dwarfNames.push(`${i+1}. ${dwarves[i]} `);
  }
  return dwarfNames.join("");
}

function summonCaptainPlanet(planeteerCalls) {
  var uppercase = [];
  for (let i=0; i < planeteerCalls.length; i++){
    var caps = planeteerCalls[i].toUpperCase() + "!";
    uppercase.push(caps);
  }
  return uppercase;
}

function longPlaneteerCalls(words) {
  for (let i=0; i < words.length; i++){
    if (words.length > 4){
      return true;
    }
    else {
      return false;
    }
  }
}

function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i].includes("cheddar")){
      return foods[i];
    }
  }
  return "no cheese!";
}
