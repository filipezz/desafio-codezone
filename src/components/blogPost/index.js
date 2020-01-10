import React from "react";

import "./styles.css";

export default function blogPost({ title, date, children }) {
  return (
    <div className="blog-post">
      <div className="blog-content">
        <p>{date}</p>
        <h1>{title}</h1>
        <h4>{children}</h4>
      </div>
      <div className="continue-reading">
        <p>
          <a href="#">Continue Reading</a>
        </p>
      </div>
    </div>
  );
}
