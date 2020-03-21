class Insert{

    constructor(DBCon) {
        this.db = DBCon;
        this.dept = this.db.collection("Dept");
        this.plant = this.db.collection("Plant");
        this.shop = this.db.collection("Shop");
        this.logs = this.db.collection("Logs");
    }

    async insertDataDept(deptParam){

        let checkDataIsComplete = true;

        for(let i = 0; i <= 1; i++){

            if(deptParam[i] === null || deptParam[i] === undefined || deptParam[i] === ""){
                checkDataIsComplete = false;
            }

        }

        if(checkDataIsComplete){

            let hasilnya;
            let getID = await this.logs.find().toArray();
            let deptParams = Object.assign({}, ...deptParam);
            let formattedData = deptParams;
            let dataWantToInsert = { idDept : getID[0].idDept, name : formattedData.name, idPlant : Number(deptParams.idPlant) };
            let statusInsert = await this.dept.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = true : hasilnya = false);
            return hasilnya;

        } else {
            return checkDataIsComplete;
        }

    }

    async insertDataPlant(plantParam){
        let checkDataIsComplete ;

        if( plantParam.length !== 0 ? checkDataIsComplete = true : checkDataIsComplete = false );

        if(checkDataIsComplete){
            let hasilnya;
            let getID = await this.logs.find().toArray();
            let dataWantToInsert = { id : getID[0].idPlant, name : plantParam[0].name };

            let statusInsert = await this.plant.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = true : hasilnya = false );
            return hasilnya;
        }else {
            return checkDataIsComplete;
        }

    }

    async insertDataShop(shopParam){
        let checkDataIsComplete = true;

        for(let i =0; i <= 2; i++){

            if(shopParam[i] === null || shopParam[i] === undefined || shopParam [i] === ""){
                checkDataIsComplete = false;
            }

        }

        if(checkDataIsComplete){
            let hasilnya;
            let getID = await this.logs.find().toArray();
            let shopParams = Object.assign({}, ...shopParam);

            let dataWantToInsert = { id : getID[0].idShop, idPlant : shopParams.idPlant, idDept : shopParams.idDept, name : shopParams.name };
            let statusInsert = await this.shop.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = true : hasilnya = false );
            return hasilnya;
        }else {
            return checkDataIsComplete;
        }
    }

}
module.exports = Insert;