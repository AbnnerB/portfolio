import HeaderFooter from "../../Components/HeaderFooter";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <HeaderFooter />
      <main>
        <section className="presentation">
          <div className="presentationContent">
            <h1>
              Nice to meet you! <br /> I'm Abnner Borges
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, modi. Alias voluptatum recusandae perferendis. Ipsa
              quibusdam odit fugiat a nam?
            </p>

            <span>Contact me</span>
          </div>
          <img
            className="imgRetrato"
            src="assets/imagePresentation.jpg"
            alt="imagemRetrato"
          />
        </section>
        <section className="languages">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>Javascript</h3>
          <h3>React</h3>
        </section>
        <section className="projects">
          <div>
            <img src="" alt="projeto22" />
          </div>
        </section>
        <section className="contact">
          <div>
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ratione et quos aut quidem voluptatem excepturi soluta dolorem
              aspernatur nihil.
            </p>
          </div>
          <div>
            <div className="name">abnner</div>
            <div className="email">abnner email</div>
            <div className="linkedin">abnner linkedin</div>
          </div>
        </section>
      </main>
      <HeaderFooter />
    </div>
  );
}
