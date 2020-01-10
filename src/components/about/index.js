import React from "react";
import "./styles.css";
export default function about({ children }) {
  return (
    <div className="about">
      <h2>About Me</h2>
      <h4>{children}</h4>
    </div>
  );
}
