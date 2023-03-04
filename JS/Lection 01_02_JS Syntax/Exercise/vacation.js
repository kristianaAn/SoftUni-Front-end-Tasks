function solve(numberOfPeople, groupType, day) {
  let price = 0;
  let priceForTenPeople = 0;

  switch (day) {
    case "Friday":
      switch (groupType) {
        case "Students":
          price = numberOfPeople * 8.45;
          break;
        case "Business":
          price = numberOfPeople * 10.9;
          priceForTenPeople = 10 * 10.9;
          break;
        case "Regular":
          price = numberOfPeople * 15;
          break;
      }
      break;
    case "Saturday":
      switch (groupType) {
        case "Students":
          price = numberOfPeople * 9.8;
          break;
        case "Business":
          price = numberOfPeople * 15.6;
          priceForTenPeople = 10 * 15.6;
          break;
        case "Regular":
          price = numberOfPeople * 20;
          break;
      }
      break;
    case "Sunday":
      switch (groupType) {
        case "Students":
          price = numberOfPeople * 10.46;
          break;
        case "Business":
          price = numberOfPeople * 16;
          priceForTenPeople = 10 * 16;
          break;
        case "Regular":
          price = numberOfPeople * 22.5;
          break;
      }
      break;
  }

  if (groupType === "Students" && numberOfPeople >= 30) {
    price = price * 0.85;
  } else if (groupType === "Business" && numberOfPeople >= 100) {
    price = price - priceForTenPeople;
  } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
    price = price * 0.95;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
