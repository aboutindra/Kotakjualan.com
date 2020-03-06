class Read{

    async readAll(clientCol){
       let data = await clientCol.find().toArray();
       return data;
    }

    async readDataMember(searchParam, memberCol){
        let status;
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

        let getActive = await memberCol.find({staMember : "TRUE"}).count();
        let result = { total:getActive };
        return result;

    }

    async readTotalNonActiveMember(memberCol){

        let getNonActive = await memberCol.find({ staMember: "FALSE" }).count();
        let result = { total : getNonActive };
        return result;

    }

    async readLastIDMember(logsCol){

        let getLastID = await logsCol.find().toArray();
        let result = { IDCard : getLastID[0].IDCard };
        return result;

    }

    async readLastNoKop(logsCol) {

        let getLastID = await logsCol.find().toArray();
        let result = { NoKop : getLastID[0].NoKop };
        return result;

    }

}
module.exports = Read;