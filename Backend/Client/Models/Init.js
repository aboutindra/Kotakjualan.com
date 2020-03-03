class Init{

    async createAllCollection(err, con){

        let db = con.db('KoperasiDB');
        if(err) console.log(err);

        await Promise.all([
            db.createCollection("Members", function (err){
                if (err) {console.log("[❌] Collection Members failed to created, err : ", err)};
                console.log("[✔] Collection Members created.");
            }),
            db.createCollection("Logs", function (err){
                if (err) {console.log("[❌] Collection Logs failed to created, err : ", err)};
                console.log("[✔] Collection Logs created.");
            })
        ]);

        console.log("[✔] Successfully connected to DB.");

        /*await async.parallel([
            db.createCollection("Clients", function (err){
                if (err) console.log(err);
                console.log("Collection Clients created.");
            }),
        ], function (error, results) {
            if (error) {
                console.log("Collection failed to created, err : ", error)
            }
            console.log(results);
        })*/

    }

}

module.exports = Init;