function parkingLotCars(inputArr) {
  let parkingCars = [];

  for (const line of inputArr) {
    let [command, carNum] = line.split(", ");

    if (command === "IN" && !parkingCars.includes(carNum)) {
      parkingCars.push(carNum);
    } else if (command === "OUT" && parkingCars.includes(carNum)) {
      let index = parkingCars.indexOf(carNum);
      parkingCars.splice(index, 1);
    }
  }

  if(parkingCars.length === 0) {
    console.log('Parking Lot is Empty');
    return;
  }

  let parkingCarsSorted = parkingCars.sort((carOne, carTwo) => carOne.localeCompare(carTwo));

  for (const number of parkingCarsSorted) {
    console.log(number);
  }
}

parkingLotCars([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

parkingLotCars([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
]);
