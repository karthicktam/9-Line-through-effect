import React from "react";
import "./styles.css";

export default function App() {
  const text = "We Love to Play";

  const randomVisibility = () => {
    return Math.random() < 0.5 ? "hidden" : "visible";
  };

  return (
    <div className="app">
      <div className="line"></div>
      <h1>{text}</h1>
      <h1 className="overlay">
        {text.split("").map((letter, idx) => (
          <span
            key={idx}
            style={{
              visibility: randomVisibility()
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
