import { get, post } from './helper';

export const getAll = async () => {
  let temp = await get("/member/gm");
  return temp;
}

export const srchAllMember = async (param) => {
  let temp = await post("/member/fm", param);  
  return temp;
}