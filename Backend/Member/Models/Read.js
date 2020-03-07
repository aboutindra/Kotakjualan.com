class Read{

    async readAll(clientCol){
        return await clientCol.find().toArray();
    }

    async readAllDept(deptCol){
        return await deptCol.find().toArray();
    }

    async readAllPlant(plantCol){
        return await plantCol.find().toArray()
    }

    async readAllShop(shopCol){
        return await shopCol.find().toArray();
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
        };
        console.log(generateDeleteparam());
        let statusFind = await deptCol.find(generateDeleteparam()).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = { status: false, message : "Dept not found" } );
        return status;
    }

    async readTotalMember(memberCol){
        let getAll = await memberCol.find().count();
        return {total: getAll};
    }

    async readTotalActiveMember(memberCol){

        let getActive = await memberCol.find({staMember : "TRUE"}).count();
        return {total: getActive};

    }

    async readTotalNonActiveMember(memberCol){

        let getNonActive = await memberCol.find({ staMember: "FALSE" }).count();
        return {total: getNonActive};

    }

    async readLastIDMember(logsCol){

        let getLastID = await logsCol.find().toArray();
        return {idCard: getLastID[0].idCard};

    }

    async readLastNoKop(logsCol) {

        let getLastID = await logsCol.find().toArray();
        return {noKop: getLastID[0].noKop};

    }

}
module.exports = Read;