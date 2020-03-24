class Put{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  putOne(param){

    let sta = new Boolean(true);

    try {
      this.akun.updateOne(param.f, {$set:param.s});
    } catch (error) {
      sta = false;
    }

    return sta;

  }

}

module.exports = Put;