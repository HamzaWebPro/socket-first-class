import { useEffect, useState } from "react";
import io from "socket.io-client";

// let socket = io("http://localhost:8000");

const socket = io("http://localhost:6000", { transports: ["websocket"] });

function App() {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  useEffect(() => {
    socket.on("connected", (message) => {
      console.log(message);
    });
  }, []);

  let handleCreate = () => {
    socket.emit("create", {
      name,
      description,
    });
  };

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} type="text" />
      <input onChange={(e) => setDescription(e.target.value)} type="text" />
      <button onClick={handleCreate}>Submit</button>
    </>
  );
}

export default App;
