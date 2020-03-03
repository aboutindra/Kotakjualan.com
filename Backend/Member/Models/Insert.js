const Object = require('mongodb').ObjectID;
class Insert{

    async insertDataClient(memberData, membersCol, logsCol){
        let hasilnya;

        let getID = await logsCol.find().toArray();
        console.log(getID[0]);

        let isi = {id_member : getID[0].id_member ,memberData};
        let statusInsert = await membersCol.insertOne(isi);
        if( statusInsert ? hasilnya = { status: true, message: "1 Member successfully inserted"  } : hasilnya = { status: false, message: "1 Member failed inserted" }  )

        logsCol.findOneAndUpdate({_id: getID[0]._id}, {$set : { id_member: getID[0].id_member + 1 }});

        return hasilnya;
    }

}
module.exports = Insert;