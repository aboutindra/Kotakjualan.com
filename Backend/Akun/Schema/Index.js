class Schema{

  async createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    await db.createCollection("Akun");        

    if(err) console.log("[ ❌ ] Collection Akun failed to created");

    console.log("[✔] Collection Akun created.");            

    
  }

}

module.exports = Schema;