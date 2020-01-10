import React from "react";

export default function header() {
  return (
    <>
      <div>
        <h1>hi, I'm a developer</h1>
      </div>
      <div style={{ display: "flex" }}>
        <h2>
          <a href="#">Blog</a>
        </h2>
        <h2>
          <a href="#"> Contact</a>
        </h2>
      </div>
    </>
  );
}
