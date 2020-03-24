class Del{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  delOne(param){

    let sta = new Boolean(true);

    try {
      this.akun.deleteOne(param);
    } catch (error) {
      sta = false;
    }

    return sta;

  }

}

module.exports = Del;
