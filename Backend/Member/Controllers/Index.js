const request = require('./Request');
const Request = new request();

const post = require('./Post');
const Post = new post();

class Controllers{

    reqAllClientData(){
        return Request.getAllClientData();
    }

    reqTotalMember(){
        return Request.getTotalMember();
    }

    reqTotalActiveMember(){
        return Request.getTotalActiveMember();
    }

    reqTotalNonActiveMember(){
        return Request.getTotalNonActiveMember();
    }

    postDataMember(clientParam){
        return Post.postDataMember(clientParam);
    }

    updateDataMember(clientParam){
        return Post.updateDataMember(clientParam);
    }

    deleteDataMember(id_member){
        return Post.deleteDataMember(id_member);
    }

    searchDataMember(id_member){
        return Post.searchDataMember(id_member);
    }

    reqLastIDMember(){
        return Request.getLastIDMember();
    }

    reqLastNoKop(){
        return Request.getLastNoKop();
    }

}

module.exports = Controllers;