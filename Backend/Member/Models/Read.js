class Read{

    async readAll(clientCol){
       let data = await clientCol.find().toArray();
       return data;
    }

    async readDataMember(searchParam, memberCol){
        let status = {status: false, message: "Member not found"};
        let generateDeleteParam = () => {
            return Object.assign({}, ...searchParam);
        };
        console.log(generateDeleteParam());
        let statusFind = await memberCol.find(generateDeleteParam()).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Member not found"} );
        return status;
    }

    async readTotalMember(memberCol){
        let getAll = await memberCol.find().count();
        let result = { total : getAll };
        return result;
    }

    async readTotalActiveMember(memberCol){

        let getActive = await memberCol.find({staanggota : "Active"}).count();
        let result = { total:getActive };
        return result;

    }

}
module.exports = Read;