class Get{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  getAccount(param){
    return this.akun.find(param).toArray();
  }

  getCount(){
    return this.akun.countDocuments();
  }

}

module.exports = Get;