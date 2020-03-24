class Get{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  async getAccount(param){
    return await this.akun.find(param).toArray();
  }

  async getCount(){
    return await this.akun.countDocuments();
  }

}

module.exports = Get;