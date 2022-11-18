import {} from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <header>
        <span>abnnerborges</span>
        <nav>
          <FaGithub />
          <FaLinkedin />
        </nav>
      </header>
      <main>
        <section className="presentation">
          <div>
            <h1>
              Nice to meet you! <br /> I'm Abnner Borges
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, modi. Alias voluptatum recusandae perferendis. Ipsa
              quibusdam odit fugiat a nam?
            </p>
          </div>
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
      <footer>
        <span>abnnerborges</span>
        <nav>
          <FaGithub />
          <FaLinkedin />
        </nav>
      </footer>
    </div>
  );
}
