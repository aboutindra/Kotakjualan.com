const Model = require('../Models/Index');
const model = new Model();

const ModeLogs = require("../../Logs/Models/Index");
const modeLogs = new ModeLogs();

class Mongo{

    cekTypeOfArray(param){

        if(param.length === undefined){
            return false;
        }
        else{
            return true;
        }

    }

    async getBarang(param){

        let tipe = param.t;

        if(tipe === 1){        
            return await model.get.getAll();
        }

        else if(tipe === 2){
            return await model.get.getWithParam(param.f);
        }

        else if(tipe === 3){
            return await model.get.getWithLimit(param.l);
        }

        else if(tipe === 4){
            return await model.get.getWithParamAndLimit({f:param.f, l:param.l});
        }

        else if(tipe == 5){
            return await model.get.getCount();
        }

        else if(tipe === 6){
            return await model.get.getPrice(param.f);
        }

        else if(tipe=== 7){
            return await model.get.getStok(param.f);
        }

        else if(tipe === 8){
            return await model.get.getCountItem(param.f);
        }

        else if(tipe === 9){
            return await model.get.getCountItemLimitStock(param.f);
        }

        else if(tipe === 10){
            return await model.get.getItemLimitStock(param.f);
        }

    }


    addItemObject(p, q, sta){

        let sta = sta;

        if(sta){

            let len = p.length;

            let tempId = q;

            let i = 0;

            let obj = p;

            while(i<len){

                obj.id = tempId;

                tempId++;

                i++;
            }

            return {o:obj, i:tempId-1};

        }

        else{

            let tempId = q;

            let obj = p;

            obj.id = tempId + 1;

            return {o:obj, i:tempId+1};

        }

    }


    async pushParrell(param, lastId, sta){

        if(sta){

            let res1 = await model.post.pushArrayOfObject(param);

            let res2 = await modeLogs.put.updateOneLogs({idBarang:lastId});

            if(res1 && res2){

                return true;

            }

            else{

                return false;
            }

        }

        else{

            let res1 =  await model.post.pushObject(param);

            let res2 = await modeLogs.put.updateOneLogs({idBarang:lastId});

            if(res1 && res2){

                return true;

            }

            else{

                return false;
            }

        }

    }

    async getLastId(){
        let res = await modeLogs.get.getAll();
        if(res.idBarang === undefined){
            return await model.get.getLastId();
        }   
        else{
            return res.idBarang;
        }
    }

    async postBarang(param){
        
        let len = await model.get.getCount();

        let sta = this.cekTypeOfArray(param);

        if(len === 0){

            let temp = this.addItemObject(param, 0, sta);

            return await this.pushParrell(temp.o, temp.i, sta);

        }

        else{

            let tempId = await this.getLastId();

            let temp = this.addItemObject(param, tempId, sta);

            return await this.pushParrell(temp.o, temp.i, sta);

        }

    }

    async putBarang(param){

        return await model.put.putSingleResult(param);

    }

    async delBarang(param){
        return await model.del.delOne(param);    }

}

module.exports = Mongo;