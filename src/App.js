import React from "react";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/index";
import BlogPost from "./components/blogPost/index";
import About from "./components/about/index";
import Footer from "./components/footer/index";
import NewsLetter from "./components/newsletter/index";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <aside className="aside">
        <section className="carrousel">
          <Carousel />
        </section>
        <ul>
          <h3>Check out my photos ✌</h3>
        </ul>
      </aside>

      <main className="main">
        <section className="first-section">
          <ul>
            <About>
              Pellentesque feugiat at ipsum id varius. Donec sed nibh porta,
              sagittis sapien quis, posuere sem. Curabitur et tortor sit amet
              dolor accumsan pharetra in id lacus. Nullam eget mollis lectus.
              Duis cursus mollis pulvinar. Morbi id magna vel elit tristique
              hendrerit nec ac ipsum. In id nisi orci. Integer ac odio quis
              felis aliquet varius a rhoncus elit. Aenean suscipit dui turpis,
              sit amet iaculis mi iaculis non. Nam at bibendum nisl.
              Pellentesque sed porta augue. Curabitur eget volutpat sem, nec
              facilisis massa.
            </About>
          </ul>
          <ul>
            <NewsLetter />
          </ul>
        </section>

        <section className="second-section">
          <h2>See my latest blog posts!</h2>
        </section>

        <section className="third-section">
          <ul>
            <BlogPost
              title="Making a simple blog with React!"
              date="09 Jan 2020"
            >
              Today we'll do a simple blog using React!
            </BlogPost>
          </ul>
          <ul>
            <BlogPost title="Happy New Year!" date="01 Jan 2020">
              Happy New 👂 everybody!
            </BlogPost>
          </ul>
          <ul>
            <BlogPost title="First Post!" date="30 Dec 2019">
              First Blog post ever!
            </BlogPost>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
