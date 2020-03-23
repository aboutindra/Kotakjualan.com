class Schema{
    createAllCollection(err, con){
        con.db("KoperasiDB").createCollection('Toko', function(err){
            if(err){ console.log("[❌] Failed to create Toko Collection") }
            console.log("[✔] Successfully create Toko Collection")
        })

    }
}
module.exports = Schema;