class Read{

    async readAll(clientCol){
       let data = await clientCol.find().toArray();
       return data;
    }

    async readAllDept(deptCol){
        let data = await deptCol.find().toArray();
        return data;
    }

    async readAllPlant(plantCol){
        let data = await plantCol.find().toArray();
        return data
    }

    async readDataPlant(idPlant, plantCol){
        let status;
        let unWrap = () => {
            return Object.assign({}, ...idPlant);
        };
        let statusFind = await plantCol.find(unWrap()).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Plant not found"} );
        return status;
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

    async readDataDept(searchParam, deptCol){
        let status;
        let generateDeleteparam = () => {
            return Object.assign({}, ...searchParam);
        }
        console.log(generateDeleteparam());
        let statusFind = await deptCol.find(generateDeleteparam()).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = { status: false, message : "Dept not found" } );
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
        let result = { idCard : getLastID[0].idCard };
        return result;

    }

    async readLastNoKop(logsCol) {

        let getLastID = await logsCol.find().toArray();
        let result = { noKop : getLastID[0].noKop };
        return result;

    }

}
module.exports = Read;