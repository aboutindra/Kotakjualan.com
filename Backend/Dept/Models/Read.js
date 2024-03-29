class Read{

    constructor(conDB) {
        this.db = conDB;
        this.dept = this.db.collection("Dept");
        this.plant = this.db.collection("Plant");
        this.shop = this.db.collection("Shop");
    }

    async readDept(){
        return await this.dept.find().sort({ noKop : -1 }).toArray();
    }

    async readDataDeptWithParam(keyword){
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
        let statusFind = await this.dept.find( await formattedObject(unWrapObject)).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Member not found"} );
        return status;
    }

    async readPlant(){
        return await this.plant.find().sort({ noKop : -1 }).toArray();
    }

    async readDataPlantWithParam(keyword){
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
        let statusFind = await this.plant.find( await formattedObject(unWrapObject)).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Member not found"} );
        return status;
    }

    async readShop(){
        return await this.shop.find().sort({ noKop : -1 }).toArray();
    }

    async readDataShopWithParam(keyword){
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
        let statusFind = await this.shop.find( await formattedObject(unWrapObject)).toArray();
        if(statusFind.length !== 0 ? status = statusFind : status = {status: false, message: "Member not found"} );
        return status;
    }


}
module.exports = Read;