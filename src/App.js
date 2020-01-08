import React from "react";
import Carrousel from "./components/carrousel";

import "./App.css";

function App() {
  return (
    <div class="container">
      <header class="header">Header</header>
      <aside class="aside">
        <section class="carrousel">
          <Carrousel />
        </section>
        <section></section>
      </aside>

      <main class="main">
        <section class="first-section">
          <ul>4</ul>
          <ul>5</ul>
        </section>

        <section class="second-section">
          <ul>6</ul>
        </section>

        <section class="third-section">
          <ul>7</ul>
          <ul>8</ul>
          <ul>9</ul>
        </section>
      </main>
      <footer class="footer">Footer</footer>
    </div>
  );
}

export default App;
