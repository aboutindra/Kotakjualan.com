const async = require('async');

class Schema{

  createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    async.parallel({

      createBarang : async function(){

        await db.createCollection("Barang");        

      }

    },function(err, res){

      if(err) console.log("[ ❌ ] Collection Barang failed to created");

      console.log("[✔] Collection Barang created.");            


    });
    
  }

}

module.exports = Schema;

