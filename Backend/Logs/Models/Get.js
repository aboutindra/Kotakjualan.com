class Get{

  constructor(connection){

    this.con = connection;

    this.logs = this.con.collection("Logs");

  }

  async getAll(){
    let temp = await this.logs.find().toArray();
    return temp;
  }

}

module.exports = Get;