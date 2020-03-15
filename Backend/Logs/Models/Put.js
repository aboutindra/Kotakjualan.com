class Put{

  constructor(con){
    
    this.con  = con;

    this.logs = this.con.collection("Logs");

  }

  async updateOneLogs(param){
    
    try {
      await this.logs.updateOne({id:1},{$set:param});
      return true;
    } 
    
    catch (error) {console.log(error);return false}
  }

}

module.exports = Put;