class Read{

    constructor(conDB) {
        this.db = conDB;
        this.dept = this.db.collection("Dept");
    }

    async readAll(){
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


}
module.exports = Read;