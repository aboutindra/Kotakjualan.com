class Post{

    constructor(con){

        this.barang = con.collection("Barang");

    }

    async pushObject(param){

        let sta = new Boolean(true);

        try {
            
            await this.barang.insertOne(param);

        } catch (e) {
            
            sta = false;

        }

        return sta;

    }    

    async pushArrayOfObject(param){
    
        let sta = new Boolean(true);

        try {
            
            await this.barang.insertMany(param);

        } catch (e) {
            
            sta = false;

        }

        return sta;

    }

    

}

module.exports = Post;