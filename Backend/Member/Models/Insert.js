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

            let dataWantToInsert = async () => {

                let generateDate = async () => {
                    let date = new Date();
                    let tgl = date.getDate();
                    let month = date.getMonth() + 1;
                    let year = date.getFullYear();
                    return tgl + "/" + month + "/" + year;
                };

                let personalData = Object.assign({}, ...memberParam);
                let data = { idCard : getID[0].idCard, noKop : getID[0].noKop, nik : personalData.nik, nama : personalData.nama, tglLahir : personalData.tglLahir , shop : personalData.shop, plant : personalData.plant, Dept : personalData.Dept, tglMasuk : await generateDate(), tglKeluar : "", staMember : "TRUE", staKaryawan : "TRUE", Ket : "Aktif" };
                console.log(data);
                return await data;

            };

            console.log(await dataWantToInsert());

            let statusInsert = await membersCol.insertOne(await dataWantToInsert());
            if( statusInsert ? hasilnya2 = { status: true, message: "1 Member successfully inserted"  } : hasilnya2 = { status: false, message: "1 Member failed inserted" }  )

                logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set : { idCard: getID[0].idCard + 1 , noKop : getID[0].noKop + 1 }});

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
            console.log(deptParams.nama, deptParams.idPlant);

            let dataWantToInsert = { idDept : getID[0].idDept, name : deptParams.nama, idPlant : Number(deptParams.idPlant) };
            let statusInsert = await deptCol.insertOne(dataWantToInsert);

            if(statusInsert ? hasilnya = { status: true, message: "1 Dept successfully inserted"  } : hasilnya = { status: false, message: "1 Dept failed to inserted"  });
            logsCol.findOneAndUpdate({_id : getID[0]._id}, {$set : {idDept : getID[0].idDept + 1}});
            return hasilnya;

        } else {
            return checkDataIsComplete;
        }

    }

    async insertDataPlant(plantParam, plantCol, logsCol){
        let checkDataIsComplete = true;

        if( plantParam !== 0 ? checkDataIsComplete = true : checkDataIsComplete = false );

        if(checkDataIsComplete){

        }
    }

}
module.exports = Insert;