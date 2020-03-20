class Get{

    constructor(con){

        this.barang = con.collection("Barang");

    }

    async getAll(){
        return await this.barang.find({}).toArray();
    }

    async getWithParam(param){
        return await this,barang.findOne(param).toArray();
    }

    async getWithLimit(lim){
        return await this.barang.find().limit(lim).toArray();
    }

    async getWithParamAndLimit(param){
        return await this.barang.find(param.f).limit(param.l).toArray();
    }

    async getCount(){
        return await this.barang.countDocuments();
    }

    async getPrice(param){
        let temp = await this.barang.findOne(param).toArray();
        return temp[0].pr;
    }

    async getStok(param){
        let temp = await this.barang.findOne(param).toArray();
        return temp[0].qt;
    }

    async getCountItem(param){
        return await this.barang.find(param).getDocuments();
    }

    async getLastId(){
        let temp = await this.barang.find().toArray();
        let len = temp.length;
        return temp[len-1].id;
    }

    async getCountItemLimitStock(param){
        let temp = new Array();
        await this.barang.find(param).forEach(e => {
            if(e.qt === 0 || e.qt === '0'){
                temp.push(e);
            }
        });
        return temp.length;
    }

    async getItemLimitStock(param){
        let temp = new Array();
        await this.barang.find(param).forEach(e => {
            if(e.qt === 0 || e.qt === '0'){
                temp.push(e);
            }
        });
        return temp;
    }
    

}

module.exports = Get;