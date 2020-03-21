class Put{

    constructor(con){

        this.barang = con.collection("Barang");

    }

    async putSingleResult(param){

        let sta = new Boolean(true);

        try {        
            await thisbarang.updateOne(param.f,{$set: param.s});
        } 
        
        catch (error) {
            sta = false;
        }

        return sta;

    }

    async putManyResult(param){

        let sta = new Boolean(true);

        try {        
            await thisbarang.updateMany(param.f,{$set: param.s});
        } 
        
        catch (error) {
            sta = false;
        }

        return sta;

    }

}

module.exports = Put;