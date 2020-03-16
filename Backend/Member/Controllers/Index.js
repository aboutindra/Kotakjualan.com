const request = require('./Request');
const Request = new request();

const post = require('./Post');
const Post = new post();

const db = require('./Database');

class Controllers{

    constructor() {

        this.db = new db();

    }


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

    postDataShop(shopParam){
        return Post.postDataShop(shopParam);
    }

    updateDataMember(clientParam){
        return Post.updateDataMember(clientParam);
    }

    updateDataPlant(plantParam){
        return Post.updateDataPlant(plantParam);
    }

    updateDataDept(deptParam){
        return Post.updateDataDept(deptParam);
    }

    updateDataShop(shopParam){
        return Post.updateDataShop(shopParam);
    }

    deleteDataMember(id_member){
        return Post.deleteDataMember(id_member);
    }

    deleteDataDept(deptParam){
        return Post.deleteDataDept(deptParam);
    }

    deleteDataPlant(plantParam){
        return Post.deleteDataPlant(plantParam);
    }

    deleteDataShop(shopParam){
        return Post.deleteDataShop(shopParam)
    }

    searchDataMember(searchParam){
        return Post.searchDataMember(searchParam);
    }

    searchDataPlant(searchParam){
        return Post.searchDataPlant(searchParam);
    }

    searchDataShop(searchParam){
        return Post.searchDataShop(searchParam);
    }

    reqLastIDMember(){
        return Request.getLastIDMember();
    }

    reqLastNoKop(){
        return Request.getLastNoKop();
    }

}

module.exports = Controllers;