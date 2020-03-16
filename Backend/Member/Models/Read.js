class Read{

    constructor(conDB) {
        this.db = conDB;
        this.member = this.db.collection("Members");
        this.logs = this.db.collection("Logs");
    }

    async readAll(){
        return await this.member.find().sort({ noKop : -1 }).toArray();
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

    async readDataMemberWithParam(keyword){
        console.log(keyword);
        let status;
        let generateDeleteparam = () => {
            return Object.assign({}, ...keyword );
        };
        console.log(generateDeleteparam());
        let unWrapObject = generateDeleteparam();
        let formattedObject = async function(obj){
            await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = new RegExp(obj[key]) } });
            return obj;
        };
        console.log(await formattedObject(unWrapObject));
        let statusFind = await this.member.find( await formattedObject(unWrapObject)).toArray();
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

    async readTotalMember(){
        let getAll = await this.member.find().count();
        return {total: getAll};
    }

    async readTotalActiveMember(){

        let getActive = await this.member.find({staMember : "TRUE"}).count();
        return {total: getActive};

    }

    async readTotalNonActiveMember(){

        let getNonActive = await this.member.find({ staMember: "FALSE" }).count();
        return {total: getNonActive};

    }

    async readLastIDMember(){

        let getLastID = await this.logs.find().toArray();
        return {idCard: getLastID[0].idCard};

    }

    async readLastNoKop() {

        let getLastID = await this.logs.find().toArray();
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