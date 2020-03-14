class Put{

  constructor(connectionDB){
    this.con = connectionDB;
    this.supp = this.con.collection("Supplier");
    this.logs = this.con.collection("Logs");
  }

  //param = [{find}, {set}];
  async updateOneSupp(param){

    try {
      await this.supp.updateOne(param[0], {$set:param[1]});
      return true;
    } 
    
    catch (error) {return false;}

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