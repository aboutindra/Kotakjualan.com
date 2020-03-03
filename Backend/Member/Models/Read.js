class Read{

    async readAll(clientCol){
       let data = await clientCol.find().toArray();
       return data;
    }

}
module.exports = Read;