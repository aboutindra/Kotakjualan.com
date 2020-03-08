class Read{

    async readAll(clientCol){
        return await clientCol.find().sort({ noKop : -1 }).toArray();
    }

    async readAllDept(deptCol){
        return await deptCol.find().sort({ id : -1 }).toArray();
    }

    async readAllPlant(plantCol){
        return await plantCol.find().sort({ id : -1 }).toArray()
    }

    async readAllShop(shopCol){
        return await shopCol.find().sort({ id : -1 }).toArray();
    }

    async readDataPlant(searchParam, plantCol){
        let status;
        let generateDeleteparam = () => {
            return Object.assign({}, ...searchParam );
        };
        let unWrapObject = generateDeleteparam();
        let formattedObject = async function(obj){
            await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = new RegExp(obj[key]) } });
            return obj;
        };
        let statusFind = await plantCol.find(await formattedObject(unWrapObject)).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Plant not found"} );
        return status;
    }

    async readDataMember(searchParam, memberCol){
        let status;
        let generateDeleteparam = () => {
            return Object.assign({}, ...searchParam );
        };
        let unWrapObject = generateDeleteparam();
        let formattedObject = async function(obj){
            await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = new RegExp(obj[key]) } });
            return obj;
        };
        let statusFind = await memberCol.find( await formattedObject(unWrapObject)).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Member not found"} );
        return status;
    }

    async readDataDept(searchParam, deptCol){
        let status;
        let generateDeleteparam = () => {
            return Object.assign({}, ...searchParam );
        };
        let unWrapObject = generateDeleteparam();
        let formattedObject = async function(obj){
            await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = new RegExp(obj[key]) } });
            return obj;
        };
        let statusFind = await deptCol.find( await formattedObject(unWrapObject)).toArray();
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

    async readDataShop(searchParam, shopCol){
        let status;
        let generateDeleteparam = () => {
            return Object.assign({}, ...searchParam );
        };
        let unWrapObject = generateDeleteparam();
        let formattedObject = async function(obj){
            await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = new RegExp(obj[key]) } });
            return obj;
        };
        console.log(await formattedObject(unWrapObject));
        let statusFind = await shopCol.find( await formattedObject(unWrapObject) ).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = { status: false, message : "Shop not found" } );
        return status;
    }

}
module.exports = Read;