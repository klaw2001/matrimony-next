// pages/api/socket.js

import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async  (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server();

    io.attach(res.socket.server);

    io.on("connection", (socket) => {
      console.log("a user connected.");

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }

  res.end();
};
