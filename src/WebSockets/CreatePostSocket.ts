// socketConfig.js
import { Server } from "socket.io";
import http from "http";
import { prismaClient } from "../databse";
import UploadNuvem from "../utils/functions/UploadNuvem";
import { PostTypes } from "../utils/types/Params";






const configureSocket = (serverHttp: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) => {
  const io = new Server(serverHttp, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });
  const posts = io.of("/posts")


  posts.on("connect", (socket) => {
    console.log("Um cliente se conectou com o ID: " + socket.id);





    socket.on("criarPost", async (msg: PostTypes) => {
    

      const post = await UploadNuvem (msg)

      await prismaClient.$disconnect()
      socket.emit("PostCreated", post)

    })

    socket.on("disconnect", () => {
      console.log("Um cliente desconectou com o ID: " + socket.id);
    });
  });
};

export default configureSocket;
