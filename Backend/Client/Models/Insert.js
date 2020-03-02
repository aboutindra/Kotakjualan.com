class Insert{

    async insertDataClient(clientParam, clientCol){

        let statusInsert = await clientCol.insertOne(clientParam);
        return statusInsert;

    }

}
module.exports = Insert;