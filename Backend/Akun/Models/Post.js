class Post{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  async postOne(param){

    let sta = new Boolean(true);

    try {
      await this.akun.insertOne(param);
    } catch (error) {
      sta = false;  
    }

    return sta;

  }

}

module.exports = Post;