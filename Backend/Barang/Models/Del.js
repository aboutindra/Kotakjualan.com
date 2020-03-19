class Del{

    constructor(con){

        this.barang = con.collection("Barang");

    }

    async delOne(param){

        let sta = new Boolean(true);

        try {
            
            this.barang.deleteOne(param);

        } 
        
        catch (error) {
            
            sta = false;

        }

        return sta;

    }

    async delMany(param){

        let sta = new Boolean(true);

        try {
            
            this.barang.deletemany(param);

        } 
        
        catch (error) {
            
            sta = false;

        }

        return sta;

    }

}

module.exports = Del;