class SrodekTransportu {
  constructor() {
    if (new.target === SrodekTransportu) {
      throw new Error("abstract");
    }
  }


  watDaVehicleDoin() {
    throw new Error("abstract");
  }
}


class Samolot extends SrodekTransportu {
  watDaVehicleDoin() {
    console.log("lece");
  }
}

class Auto extends SrodekTransportu {
  watDaVehicleDoin() {
    console.log("jade");
  }
}

class Lodz extends SrodekTransportu {
  watDaVehicleDoin() {
    console.log("plyne");
  }
}