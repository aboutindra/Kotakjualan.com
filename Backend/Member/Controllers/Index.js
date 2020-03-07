const request = require('./Request');
const Request = new request();

const post = require('./Post');
const Post = new post();

class Controllers{

    reqAllClientData(){
        return Request.getAllClientData();
    }

    reqAllDeptData(){
        return Request.getAllDeptData();
    }

    reqAllPlantData(){
        return Request.getAllPlantData();
    }

    reqTotalMember(){
        return Request.getTotalMember();
    }

    reqAllShopData(){
        return Request.getAllShopData();
    }

    reqTotalActiveMember(){
        return Request.getTotalActiveMember();
    }

    reqTotalNonActiveMember(){
        return Request.getTotalNonActiveMember();
    }

    postDataDept(deptParam){
        return Post.postDataDept(deptParam);
    }

    postFindDataDept(deptParam){
        return Post.postFindDataDept(deptParam);
    }

    postDataMember(clientParam){
        return Post.postDataMember(clientParam);
    }

    postDataPlant(plantParam){
        return Post.postDataPlant(plantParam);
    }

    updateDataMember(clientParam){
        return Post.updateDataMember(clientParam);
    }

    updateDataPlant(plantParam){
        return Post.updateDataPlant(plantParam);
    }

    deleteDataMember(id_member){
        return Post.deleteDataMember(id_member);
    }

    updateDataDept(deptParam){
        return Post.updateDataDept(deptParam);
    }

    deleteDataDept(deptParam){
        return Post.deleteDataDept(deptParam);
    }

    deleteDataPlant(plantParam){
        return Post.deleteDataPlant(plantParam);
    }

    searchDataMember(id_member){
        return Post.searchDataMember(id_member);
    }

    searchDataPlant(idPlant){
        return Post.searchDataPlant(idPlant);
    }

    reqLastIDMember(){
        return Request.getLastIDMember();
    }

    reqLastNoKop(){
        return Request.getLastNoKop();
    }

}

module.exports = Controllers;