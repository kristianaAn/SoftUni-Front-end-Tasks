function getTownInfo(inputArr) {
  for (const line of inputArr) {
    let [town, latitude, longitude] = line.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    let townsObj = {town, latitude, longitude};
    console.log(townsObj);
  }
}

getTownInfo([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
