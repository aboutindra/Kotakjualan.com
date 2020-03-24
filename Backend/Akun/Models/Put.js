class Put{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  async putOne(param){

    let sta = new Boolean(true);

    try {
      await this.akun.updateOne(param.f, {$set:param.s});
    } catch (error) {
      sta = false;
    }

    return sta;

  }

}

module.exports = Put;