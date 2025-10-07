class Artysta {
  constructor() {
    if (new.target === Artysta) {
      throw new Error("abstract");
    }
  }


  kontempluj() {
    throw new Error("abstract");
  }

    tworzDzielo() {
    throw new Error("abstract");
  }

}


class Rzezbiarz extends Artysta {
  kontempluj() {
    console.log("hmmm ladna rzezba");
  }

   tworzDzielo() {
    console.log("rzezbi");
  }
}

class Malarz extends Artysta {
  kontempluj() {
    console.log("hmmm ladny obraz");
  }

   tworzDzielo() {
    console.log("maluje");
  }
}

class Pisarz extends Artysta {
  kontempluj() {
    console.log("hmmm ladny wiersz");
  }

   tworzDzielo() {
    console.log("pisze");
  }
}