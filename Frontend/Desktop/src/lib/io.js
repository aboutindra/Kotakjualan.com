import soc from "socket.io-client";

const baseURL = "https://api.kotakjualan.com";

export const buildIO = () => {
  const io = new soc(baseURL);
  return io;
}

export const loadMember = () => {
  const io = new soc(baseURL);
  io.emit("load");
}
