class Del{

  constructor(connectionDB){
    this.con = connectionDB;
    this.supp = this.con.collection("Supplier");
  }


  //param = {Object}
  async deleteOneSupp(param){

    try {
      await this.supp.deleteOne(param);
      return true;  
    } 
    
    catch (error) {return false;}

  }

}

module.exports = Del;