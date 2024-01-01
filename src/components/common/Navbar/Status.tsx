import React, { useState } from "react";
import { listen } from "@tauri-apps/api/event";

const Status = () => {
  const [isConnected, setIsConnected] = useState(false);
  const eventHandler = () => {
    setIsConnected(true);
    setTimeout(() => {
      setIsConnected(false);
    }, 1000);
  };
  listen("backend-ping", eventHandler);
  return (
    <div>
      <span className={`blink_me ${isConnected ? "green" : "black"}`}></span>
    </div>
  );
};

export default Status;
