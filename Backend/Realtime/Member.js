const API = require('../Member/Controllers/Index');
const api = new API();

class Member{

  constructor(io){
    
    this.io = io;

    this.__init();

  }

  __init(){

    this.io.on("connection",(soc)=>{

      soc.on('load', async ()=>{

        this.getAllMember();

      });

    });

  }  

  async getAllMember(){
    let temp = await api.reqAllClientData();
    this.io.emit("packageAllMember", temp);
  }

}

module.exports = Member;
