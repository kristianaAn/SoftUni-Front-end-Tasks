function solve(inputDataArr) {
  const n = Number(inputDataArr.shift());
  let piecesArr = inputDataArr.splice(0, n);
  let pieceObjects = {};
  for (let piece of piecesArr) {
    [piece, composer, key] = piece.split("|");
    pieceObjects[piece] = [composer, key];
  }

  for (let i = 0; i < inputDataArr.length; i++) {
    let currLine = inputDataArr[i];
    [command, piece, composer, key] = currLine.split("|");

    if (command === "Add") {
      if(pieceObjects.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        pieceObjects[piece] = [composer, key];
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
      }
    } else if (command === "Remove") {
      if(pieceObjects.hasOwnProperty(piece)) {
        console.log(`Successfully removed ${piece}!`);
        delete pieceObjects[piece];
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
      }
    } else if (command === "ChangeKey") {
      if(pieceObjects.hasOwnProperty(piece)) {
        let newKey = composer;
        pieceObjects[piece][1] = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
      }
    } else if (command === "Stop") {
      for (const key in pieceObjects) {
        console.log(`${key} -> Composer: ${pieceObjects[key][0]}, Key: ${pieceObjects[key][1]}`);
      }
      break;
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`);
    }
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

solve([ 
  '4', 
  'Eine kleine Nachtmusik|Mozart|G Major', 
  'La Campanella|Liszt|G# Minor', 
  'The Marriage of Figaro|Mozart|G Major', 
  'Hungarian Dance No.5|Brahms|G Minor', 
  'Add|Spring|Vivaldi|E Major', 
  'Remove|The Marriage of Figaro', 
  'Remove|Turkish March', 
  'ChangeKey|Spring|C Major', 
  'Add|Nocturne|Chopin|C# Minor', 
  'Stop' 
]);
