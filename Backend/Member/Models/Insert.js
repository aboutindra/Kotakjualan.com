class Insert{

    constructor(DBCon) {
        this.db = DBCon;
        this.dept = this.db.collection("Dept");
        this.logs = this.db.collection("Logs");
    }

    async insertDataMember(memberParam){
        let checkDataIsComplete = true;
        console.log(memberParam);
        for(let i = 0; i <= 1; i++ ){

            if( memberParam[i] === null || memberParam[i] === "" || memberParam[i] === undefined){
                checkDataIsComplete = false;
            }

        }

        if(checkDataIsComplete){

            let hasilnya2;
            let getID = await this.logs.find().toArray();
            console.log(getID);
            let dataWantToInsert = async () => {

                let formattedData = Object.assign({}, ...memberParam);

                let data = { id : getID[0].idDept, idPlant : formattedData.idPlant, name : formattedData.name };
                console.log(data);
                return data;
            };

            let statusInsert = await this.dept.insertOne(await dataWantToInsert());
            if( statusInsert ? hasilnya2 = true : hasilnya2 = false  )

            console.log(hasilnya2);
            return hasilnya2;

        } else {
            return checkDataIsComplete;
        }
        /*Test*/

    }

    /*async insertDataDept(deptParam, deptCol, logsCol){

        let checkDataIsComplete = true;

        for(let i = 0; i <= 1; i++){

            if(deptParam[i] === null || deptParam[i] === undefined || deptParam[i] === ""){
                checkDataIsComplete = false;
            }

        }

        if(checkDataIsComplete){

            let hasilnya;
            let getID = await logsCol.find().toArray();
            let deptParams = Object.assign({}, ...deptParam);
            let formattedObject = async function(obj){
                await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = obj[key] } });
                return obj;
            };
            let formattedData = deptParam;
            let dataWantToInsert = { idDept : getID[0].idDept, name : formattedData.nama, idPlant : Number(deptParams.idPlant) };
            let statusInsert = await deptCol.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = { status: true, message: "1 Dept successfully inserted"  } : hasilnya = { status: false, message: "1 Dept failed to inserted"  });
            await logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set: {idDept: getID[0].idDept + 1}});
            return hasilnya;

        } else {
            return checkDataIsComplete;
        }

    }*/

    async insertDataPlant(plantParam, plantCol, logsCol){
        let checkDataIsComplete = true;

        if( plantParam.length !== 0 ? checkDataIsComplete = true : checkDataIsComplete = false );

        if(checkDataIsComplete){
            let hasilnya;
            let getID = await logsCol.find().toArray();
            let dataWantToInsert = { id : getID[0].idPlant, name : plantParam[0].name };

            let statusInsert = await plantCol.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = { status: true, message: "1 Dept successfully inserted" } : hasilnya = { status: false, message: "1 Dept failed inserted" } );
            await logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set: {idPlant: getID[0].idPlant + 1}});
            return hasilnya;
        }else {
            return checkDataIsComplete;
        }

    }

    async insertDataShop(shopParam, shopCol, logsCol){
        let checkDataIsComplete = true;

        for(let i =0; i <= 2; i++){

            if(shopParam[i] === null || shopParam[i] === undefined || shopParam [i] === ""){
                checkDataIsComplete = false;
            }

        }

        if(checkDataIsComplete){
            let hasilnya;
            let getID = await logsCol.find().toArray();
            let shopParams = Object.assign({}, ...shopParam);
            let formattedObject = async function(obj){
                await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = obj[key] } });
                return obj;
            };
            let formattedData = shopParams;
            let dataWantToInsert = { id : getID[0].idShop, formattedData };
            let statusInsert = await shopCol.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = { status: true, message: "1 Shop successfully inserted" } : hasilnya = { status: false, message: "1 Shop failed inserted" } );
            await logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set: {idShop: getID[0].idShop + 1}});
            return hasilnya;
        }else {
            return checkDataIsComplete;
        }
    }

}
module.exports = Insert;