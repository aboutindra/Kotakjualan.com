class Post{

  constructor(con){

    this.connection = con;

    this.order = this.connection.collection("Order");

  }

  //param = {Object}
  async insertObject(param){
    try {
      await this.order.insertOne(param);
      return true;
    } catch (error) {
      return false;
    }
  }

  //param = [Object]
  async insertWithArray(param){
    try {
      await this.order.insertMany(param);
      return true;
    } catch (error) {
      return false;
    }
  }

}

module.exports = Post;