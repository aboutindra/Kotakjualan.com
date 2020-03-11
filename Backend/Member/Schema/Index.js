const async = require('async');

class Schema{

  createAllCollection(err, con){    

    let db = con.db('KoperasiDB');

    if(err) console.log(err);    

    async.parallel({

      createMember : async function(){

        await db.createCollection("Members");        

      },

      createPlant : async function(){

        await db.createCollection("Plant");        

      },

      createDept :async function(){

        await db.createCollection("Dept");        

      },

      createShop :async function(){

        await db.createCollection("Shop");        

      },

      logs : async function(){

        await db.createCollection("Logs");

      }

    },function(err, res){

      if(err) console.log("[ ❌ ] Collection failed to created");

      console.log("[✔] Collection Members created.");
      
      console.log("[✔] Collection Plant created.");
      
      console.log("[✔] Collection Dept created.");
      
      console.log("[✔] Collection Shop created.");


    });
    
  }

}

module.exports = Schema;

