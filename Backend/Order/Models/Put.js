class Put{

  constructor(con){

    this.connection = con;

    this.order = this.connection.collection("Order");

  }

  async putOne(find, set){
    try {
      await this.order.updateOne({find}, {$set:set});
      return true;
    } catch (error) {
      return false;
    }
  }

  async putMany(find, set){
    try {
      await this.order.updateMany({find},{$set:{set}})
      return true;
    } catch (error) {
      return false;
    }
  }

}

module.exports = Put;