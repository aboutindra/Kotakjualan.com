class Del{

  constructor(con){
    
    this.con  = con;

    this.logs = this.con.collection("Logs");

  }

}

module.exports = Del;