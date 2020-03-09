import { get, post } from './helper';

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