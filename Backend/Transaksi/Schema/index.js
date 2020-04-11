class Schema{
    async addCollection(con){
        await con.db('KoperasiDB').createCollection('Transaksi',(err)=>{
            if(err) {console.log(`[X] tidak bisa membuat collection Transaksi !!!!${err}`);}
            else{console.log("[✔] Berhasil Membuat Collection Transaksi")}
        })
    }


}

module.exports = Schema;