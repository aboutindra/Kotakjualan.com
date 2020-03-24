class Del{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  async delOne(param){

    let sta = new Boolean(true);

    try {
      await this.akun.deleteOne(param);
    } catch (error) {
      sta = false;
    }

    return sta;

  }

}

module.exports = Del;
