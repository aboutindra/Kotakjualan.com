import { get ,post, put, del } from './helper';

// export const getAll = async () => {
//   let temp = await get("/member/gm");
//   return temp;
// }

// export const getAllPlant = async () => {
//   let temp = await get("/plant/gp");
//   return temp;
// }

// export const getAllDept = async () => {
//   let temp = await get("/dept/gd");
//   return temp;
// }

// export const getAllShop = async () => {
//   let temp = await get("/shop/gs");
//   return temp;
// }

// export const srchAllMember = async (param) => {
//   let temp = await post("/member/fm", param);  
//   return temp;
// }

// export const insertMember = async (param) => {
//   try {
//     let temp = await post("/member/im", param);    
//     console.log(temp);
//     return true;
//   } catch (err) {
//     return false;
//   }
// }

export const apiLogin = async (data) => {
  
  const format = {
    
    param:{
      t:1,
      f:data
    }

  } 
  
  const fin = {
    param:JSON.stringify(format)
  }

  let temp = await get(`/akun/e`, fin);

  return temp.result;

}

export const apiSignup = async (data) => {

  const fin = {
    param:data
  }

  let res = await post("/akun/e", fin);

  return res.result;

}

export const apiAddSupplier = async (data) => {

  const obj = {
    param:data
  }

  let res = await post("/supp/e", obj);

  return res.result;

}

export const apiGetAllSupplier = async () => {

  const tmpObj = {    
    param:{
      t:1
    }
  }

  const obj = {
    param: JSON.stringify(tmpObj)
  }

  let res = await get("/supp/e", obj);

  return res.result;

}

export const apiGetWithParamSupplier = async (data) => {

  const tmpObj = {
    param:{
      t: 2,
      f: data
    }
  }

  const obj = {
    param: JSON.stringify(tmpObj)
  }

  let res = await get("/supp/e", obj);

  return res.result;

}

export const apiGetWithRangeSupplier = async (start, limit) => {

  const tmpObj = {
    param : {
      t: 4,
      s: start,
      l: limit
    }
  }

  const obj = {
    param : JSON.stringify(tmpObj)
  }

  let res = await get(obj);

  return res.result;

}

export const apiGetTotalSupplier = async () => {

  const tmpObj = {
    param : {
      t : 6
    }
  }

  const obj = {
    param:JSON.stringify(tmpObj)
  }

  let res = await get("/supp/e", obj);

  return res.result;

}

export const apiGetAllItemSupplier = async () => {

  const tmpObj = {
    param : {
      t : 7
    }
  }

  const obj = {
    param : JSON.stringify(tmpObj)
  }

  let res = await get("/supp/e", obj);

  return res.result;

}

export const apiGetItemWithParamSupplier = async (data) => {

  const tmpObj = {
    param : {
      t : 8,
      f : data
    }
  }

  const obj = {
    param : JSON.stringify(tmpObj)
  }

  let res = await get("/supp/e", obj);

  return res.result;

}

export const apiUpdateSupplier = async (find, set) => {

  const obj = {
    param : {
      f : find,
      s : set
    }
  }

  let res = await put("/supp/e", obj);

  return res.result;

}

export const apiDeleteSupplier = async (payload) => {
  
  const obj = {
    param : payload
  }

  let res = await del("/supp/e", obj);

  return res.result;

}