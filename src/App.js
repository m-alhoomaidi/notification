import React, { useRef } from "react";
import "./styles.css";
import NotificationSound from "./notification-sound.mp3";

export default function App() {
  const audioPlayer = useRef(null);

  function playAudio() {
    audioPlayer.current.play();
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <h2>Press the button to play audio</h2>
        <button onClick={playAudio}>Play</button>
        <audio ref={audioPlayer} src={NotificationSound} />
      </div>
    </div>
  );
}
