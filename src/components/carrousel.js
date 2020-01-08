import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import "./carrousel.css";

export default function Carrousel() {
  const [current, setCurrent] = useState(0);
  const [x, setX] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1446457292373-a8e0bb763287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
    "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1531000604546-0f62e21efc55?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1529419412599-7bb870e11810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  ];

  function nextImage() {
    x === -100 * (images.length - 1) ? setCurrent(0) : setCurrent(current + 1);

    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  }

  function previousImage() {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
    x === 0 ? setCurrent(1 * (images.length - 1)) : setCurrent(current - 1);
  }
  function renderSpans() {
    let spans = [];
    for (let i = 0; i < images.length; i++) {
      if (current === i) {
        spans.push(<span id={i} className="selected-image active" />);
      } else {
        spans.push(<span id={i} className="selected-image" />);
      }
    }
    return spans;
  }
  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="slide"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateX(${x}%)`
          }}
        />
      ))}
      <span className="current-image">{renderSpans()}</span>
      <button className="backArrow" onClick={nextImage}>
        <NavigateNextIcon style={{ fontSize: 30 }} />
      </button>
      <button className="nextArrow" onClick={previousImage}>
        <NavigateBeforeIcon style={{ fontSize: 30 }} />
      </button>
    </div>
  );
}
