class Post{

  constructor(connectionDB){
    this.con = connectionDB;
    this.supp = this.con.collection("Supplier");
  }

  //param = {Object}
  async insertOneSupp(param){
    
    try {
      
      await this.supp.insertOne(param);
      return true;

    } 
    
    catch (error) {      
      return false;
    }

  }

  //param = [{Object in Array}]
  async insertManySupp(param){

    try {
      
      await this.supp.insertMany(param);
      return true;

    } 
    
    catch (error) {return false;}

  }

}

module.exports = Post;