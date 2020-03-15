class Post{

  constructor(con){
    
    this.con  = con;

    this.logs = this.con.collection("Logs");    

  }

}

module.exports = Post;