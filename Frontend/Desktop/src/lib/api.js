import { get ,post } from './helper';

export const getAll = async () => {
  let temp = await get("/member/gm");
  return temp;
}

export const getAllPlant = async () => {
  let temp = await get("/plant/gp");
  return temp;
}

export const getAllDept = async () => {
  let temp = await get("/dept/gd");
  return temp;
}

export const getAllShop = async () => {
  let temp = await get("/shop/gs");
  return temp;
}

export const srchAllMember = async (param) => {
  let temp = await post("/member/fm", param);  
  return temp;
}

export const insertMember = async (param) => {
  try {
    let temp = await post("/member/im", param);    
    console.log(temp);
    return true;
  } catch (err) {
    return false;
  }
}

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