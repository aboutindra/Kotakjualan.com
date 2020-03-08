class Insert{

    async insertDataMember(memberParam, membersCol, logsCol){
        let checkDataIsComplete = true;

        for(let i = 0; i <= 4; i++ ){

            if( memberParam[i] === null || memberParam[i] === "" || memberParam[i] === undefined){
                checkDataIsComplete = false;
            }

        }

        if(checkDataIsComplete){

            let hasilnya2;
            let getID = await logsCol.find().toArray();
            console.log(getID);
            let dataWantToInsert = async () => {

                let generateDate = async () => {
                    let date = new Date();
                    let tgl = date.getDate();
                    let month = date.getMonth() + 1;
                    let year = date.getFullYear();
                    return tgl + "/" + month + "/" + year;
                };

                let personalData = Object.assign({}, ...memberParam);
                let formattedObject = async function(obj){
                    await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = obj[key].toUpperCase() } });
                    return obj;
                };
                let formattedData = formattedObject(personalData);
                let data = { idCard : getID[0].idCard, noKop : getID[0].noKop, nik : formattedData.nik, nama : formattedData.nama, tglLahir : personalData.tglLahir , shop : formattedData.shop, plant : formattedData.plant, Dept : personalData.dept, tglMasuk : await generateDate(), tglKeluar : "", staMember : true, staKaryawan : true, Ket : "Aktif", tglInput : await generateDate() };
                console.log(data);
                return data;
            };

            console.log(await dataWantToInsert());

            let statusInsert = await membersCol.insertOne(await dataWantToInsert());
            if( statusInsert ? hasilnya2 = { status: true, message: "1 Member successfully inserted"  } : hasilnya2 = { status: false, message: "1 Member failed inserted" }  )

                await logsCol.findOneAndUpdate({_id: getID[0]._id}, {
                    $set: {
                        idCard: getID[0].idCard + 1,
                        noKop: getID[0].noKop + 1
                    }
                });

            return hasilnya2;

        } else {
            return checkDataIsComplete;
        }

    }

    async insertDataDept(deptParam, deptCol, logsCol){

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
                await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = obj[key].toUpperCase() } });
                return obj;
            };
            let formattedData = formattedObject(deptParams);
            let dataWantToInsert = { idDept : getID[0].idDept, name : formattedData.nama, idPlant : Number(deptParams.idPlant) };
            let statusInsert = await deptCol.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = { status: true, message: "1 Dept successfully inserted"  } : hasilnya = { status: false, message: "1 Dept failed to inserted"  });
            await logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set: {idDept: getID[0].idDept + 1}});
            return hasilnya;

        } else {
            return checkDataIsComplete;
        }

    }

    async insertDataPlant(plantParam, plantCol, logsCol){
        let checkDataIsComplete = true;

        if( plantParam.length !== 0 ? checkDataIsComplete = true : checkDataIsComplete = false );

        if(checkDataIsComplete){
            let hasilnya;
            let getID = await logsCol.find().toArray();
            let dataWantToInsert = { id : getID[0].idPlant, name : plantParam[0].name.toUpperCase() };

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
                await Object.keys(obj).forEach(function(key){ if( !Number.isInteger(obj[key])){ obj[key] = obj[key].toUpperCase() } });
                return obj;
            };
            let formattedData = formattedObject(shopParams);
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