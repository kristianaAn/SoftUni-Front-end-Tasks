function heroesRegistry(inputArr) {
  let heroesList = [];

  for (const line of inputArr) {
    let hero = line.split(' / ');
    heroesList.push(hero);
  }

  heroesList.sort((heroOne, heroTwo) => {
    let heroOneLevel = Number(heroOne[1]);
    let heroTwoLevel = Number(heroTwo[1]);

    return heroOneLevel - heroTwoLevel;
  });

  for (const hero of heroesList) {
    console.log(`Hero: ${hero[0]}`);
    console.log(`level => ${hero[1]}`);
    console.log("items => " + hero[2]);
  }
}

heroesRegistry([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

heroesRegistry([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
