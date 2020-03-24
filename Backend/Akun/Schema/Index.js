class Schema{

  createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    async.parallel({

      createAkun : async function(){

        await db.createCollection("Akun");        

      }

    },function(err, res){

      if(err) console.log("[ ❌ ] Collection Barang failed to created");

      console.log("[✔] Collection Barang created.");            


    });
    
  }

}

module.exports = Schema;