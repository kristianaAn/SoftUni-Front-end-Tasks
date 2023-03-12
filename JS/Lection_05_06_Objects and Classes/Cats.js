function createCats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let allCats = [];
  for (const line of input) {
    let [catName, catAge] = line.split(' ');
    catAge = Number(catAge);
    allCats.push(new Cat(catName, catAge));
  }

  for (const cat of allCats) {
    cat.meow();
  }
}

createCats(['Mellow 2', 'Tom 5']);
createCats(['Candy 1', 'Poppy 3', 'Nyx 2']);
