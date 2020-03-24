class Post{

  constructor(database){

    this.akun = database.collection("Akun");

  }

  postOne(param){

    let sta = new Boolean(true);

    try {
      this.akun.insertOne(param);
    } catch (error) {
      sta = false;  
    }

    return sta;

  }

}

module.exports = Post;