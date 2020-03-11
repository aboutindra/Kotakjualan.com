const async = require('async');

class Schema{

  createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    async.parallel({

      createSupplier : async function(){

        await db.createCollection("Supplier");        

      }

    },function(err, res){

      if(err) console.log("[ ❌ ] Collection Supplier failed to created");

      console.log("[✔] Collection Supplier created.");            


    });
    
  }

}

module.exports = Schema;

