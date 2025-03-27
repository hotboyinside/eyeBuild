"use client";
import { io } from "socket.io-client";

export default function Ticket() {
  const socket = io("http://localhost:9002", {
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log("Подключение установлено");
  });

  socket.on("message", data => {
    console.log("Сообщение от сервера:", data);
  });

  socket.on("disconnect", () => {
    console.log("Подключение разорвано");
  });

  return (
    <div>
      <h1>Тикет №</h1>
      {/* <button onClick={}></button> */}
    </div>
  );
}
