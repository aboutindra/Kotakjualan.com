class Insert{

    constructor(DBCon) {
        this.db = DBCon;
        this.profit = this.db.collection('Profit');
        this.barang = this.db.collection('Barang');
    }

    async insertProfit(profitData){


        let profit = () => {
            let total = 0;
            for(let i = 0; i < profitData.length; i++){
                total += profitData[i].qty * profitData[i].price;
            }
            return total;
        }

        let decreasingStock = [];
        for(let i = 0; i < profitData.length; i++) {
            decreasingStock.push({idBarang : profitData[i].idBarang, qty : profitData[i].qty})
        }

        let insertProfit = await this.profit.insertOne({ pembelian : profitData, total : profit(), time : new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}) })

        let updateStock = await this.barang.bulkWrite(decreasingStock.map((data) => ({
            updateOne:{
                filter:{ idBarang : data.idBarang },
                update:{ $inc : { qty : -data.qty } }
            }
        })))

        if( insertProfit && updateStock ){
            return true
        } else {
            return false
        }

    }

}
module.exports = Insert;