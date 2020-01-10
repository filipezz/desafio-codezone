import React from "react";

import "./styles.css";

export default function newsletter() {
  return (
    <div className="newsletter">
      <h2>Subscribe to my newsletter! 📧</h2>
      <div>
        <input placeholder="Type your best email" type="text" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
