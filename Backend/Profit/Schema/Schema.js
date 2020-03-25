class Schema{

    async createCollection(err, con){
        if(err) { console.log("[❌] Failed connected to Database, \nMessages : ", err) }
        let db = con.db("KoperasiDB");
        let createCollection = await db.createCollection("Profit");
        if(createCollection){ console.log("[✔] Successfully created Profit Collection") }
        else{ console.log("[❌] Failed created Profit Collection, \nMessages : ", err) }
    }

}
module.exports = Schema;