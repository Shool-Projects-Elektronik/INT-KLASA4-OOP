class Psowate {
  constructor() {
    if (new.target === Psowate) {
      throw new Error("Abstract");
    }
  }


  dajGlos() {
    throw new Error("Abstract");
  }
}


class Pies extends Psowate {
  dajGlos() {
    console.log("HAU HAU!");
  }
}

class Sczeniak extends Psowate {
  dajGlos() {
    console.log("hau hua (?????z malej bo sczeniak ?????)");
  }
}

class Wilk extends Psowate {
  dajGlos() {
    console.log("Auuuuuuuu");
  }
}

const pies = new Pies();
const sczeniak = new Sczeniak();
const wilk = new Wilk();