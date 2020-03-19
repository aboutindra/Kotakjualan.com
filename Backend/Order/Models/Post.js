class Post{

  constructor(con){

    this.connection = con;

    this.order = this.connection.collection("Order");

  }

  //param = {Object}
  async insertObject(param){
    try {
      let temp = await this.order.insertOne(param);
      return true;
    } catch (error) {
      console.log("error");
      return false;
    }
  }

  //param = [Object]
  async insertWithArray(param){
    try {
      let temp = await this.order.insertMany(param);
      return true;
    } catch (error) {
      return false;
    }
  }

}

module.exports = Post;