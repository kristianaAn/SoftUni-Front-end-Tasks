function solve(speed, area) {
  let speeding = false;
  let difference;
  let zoneLimit;
  let status;

  switch (area) {
    case "motorway":
      zoneLimit = 130;
      if (speed > zoneLimit) {
        speeding = true;
        difference = speed - zoneLimit;
      }
      break;
    case "interstate":
      zoneLimit = 90;
      if (speed > zoneLimit) {
        speeding = true;
        difference = speed - zoneLimit;
      }
      break;
    case "city":
      zoneLimit = 50;
      if (speed > zoneLimit) {
        speeding = true;
        difference = speed - zoneLimit;
      }
      break;
    case "residential":
      zoneLimit = 20;
      if (speed > zoneLimit) {
        speeding = true;
        difference = speed - zoneLimit;
      }
      break;
  }

  if (difference <= 20) {
    status = "speeding";
  } else if (difference <= 40) {
    status = 'excessive speeding';
  } else if (difference > 40) {
    status = 'reckless driving';
  }
  
  
  if (speeding === false) {
    console.log(`Driving ${speed} km/h in a ${zoneLimit} zone`);
  } else {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zoneLimit} - ${status}`);
  }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
