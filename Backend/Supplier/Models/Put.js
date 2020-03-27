class Put{

  constructor(connectionDB){
    this.con = connectionDB;
    this.supp = this.con.collection("Supplier");   
  }

  //param = [{find}, {set}];
  async updateOneSupp(param){

    try {
      await this.supp.updateOne(param.f, {$set:param.s});
      return true;
    } 
    
    catch (error) {return false;}

  }  

}

module.exports = Put;