class FormatDate{

  constructor(){
    
    this.date = new Date();

  }

  getDay(){
    return this.date.getDate();
  }

  getMon(){
    return this.date.getMonth() + 1;
  }

  getYer(){
    return this.date.getFullYear();
  }

  getFormat(){
    let temp = `${this.getDay()}/${this.getMon()}/${this.getYer()}`;
    return temp;
  }

}

module.exports = FormatDate;