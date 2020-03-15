class Del{

  constructor(con){

    this.connection = con;

    this.order = this.connection.collection("Order");

  }

  //param = {Object}
  async delOne(param){
    try {
      await this.order.deleteOne(param);
      return true;
    } catch (error) {
      return false;
    }
  }

  //param = {Object}
  async delMany(param){
    try {
      await this.order.deleteMany(param);
      return true;
    } catch (error) {
      return false;
    }
  }

}

module.exports = Del;