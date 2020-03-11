import soc from "socket.io-client";

const baseURL = "http://localhost:1999/";

export const buildIO = () => {
  const io = new soc(baseURL);
  return io;
}

export const loadMember = () => {
  const io = new soc(baseURL);
  io.emit("load");
}
