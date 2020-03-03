const request = require('./Request');
const Request = new request();

const post = require('./Post');
const Post = new post();

class Controllers{

    reqAllClientData(){
        return Request.getAllClientData();
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

}

module.exports = Controllers;