const async = require('async');

class Schema{

  createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    async.parallel({

      createLogs : async function(){

        await db.createCollection("Logs");        

      }

    },function(err, res){

      if(err) console.log("[ ❌ ] Collection Logs failed to created");

      console.log("[✔] Collection Logs created.");            


    });
    
  }

}

module.exports = Schema;

