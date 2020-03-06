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
                let data = { IDCard : getID[0].IDCard, NoKop : getID[0].NoKop, NIK : personalData.NIK, Nama : personalData.Nama, Shop : personalData.Shop, Plant : personalData.Plant, Dept : personalData.Dept, tglMasuk : await generateDate(), tglKeluar : "", staMember : "TRUE", staKaryawan : "TRUE", Ket : "Aktif" }
                console.log(data);
                return await data;

            };

            console.log(await dataWantToInsert());

            let statusInsert = await membersCol.insertOne(await dataWantToInsert());
            if( statusInsert ? hasilnya2 = { status: true, message: "1 Member successfully inserted"  } : hasilnya2 = { status: false, message: "1 Member failed inserted" }  )

                logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set : { IDCard: getID[0].IDCard + 1 , NoKop : getID[0].NoKop + 1 }});

            return hasilnya2;

        } else {
            return checkDataIsComplete;
        }

    }

}
module.exports = Insert;