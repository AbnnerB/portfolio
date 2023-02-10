import { useRef } from "react";

import Footer from "../../Components/Footer";
import ProjectCard from "../../Components/ProjectCard";
import InfoProjects from "../../Data/InfoProjects";

import "./styles.css";

import { FaAngleRight, FaAngleLeft, FaUnderline } from "react-icons/fa";

import TypeWriterEffect from "react-typewriter-effect";

export default function Home() {
  const dataTop5 = InfoProjects.slice(0, 5);

  const carousel = useRef(null);

  function carouselScrollLeft() {
    console.log(carousel.current);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
  function carouselScrollRight() {
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div>
      <main>
        <section className="presentation">
          <div className="presentationContent">
            <h1>
              <TypeWriterEffect
                startDelay={500}
                cursorColor="rgb(22, 22, 22)"
                text="Seja Bem-vindo! Eu Sou o Abnner Borges."
                typeSpeed={110}
                eraseSpeed={100}
              />
            </h1>
          </div>
          <div>
            <span className="myNameDivImg">abnnerborges</span>
            <img
              className="imgRetrato"
              src="assets/eu.png"
              alt="imagemRetrato"
            />
          </div>
        </section>

        <section className="aboutMe" id="about">
          <h2>Sobre</h2>
          <p>
            Em 2022 iniciei os meus estudos na área da programação e desde o meu
            primeiro "Hello World" sou um apaixonado por esse mundo de infinitas
            possibilidades.
          </p>
          <p>
            Especificamente na área do Front-end, onde iniciei os meus estudos
            em HTML, CSS, JS e React-JS, que sigo estudando até os dias de hoje.
          </p>
          <p>
            Enquanto prossigo nessa jornada me fascino a cada desafio, sempre
            buscando aprender e contribuir, gerando valor aos usuários dos meus
            projetos.
          </p>
          <p>
            Inclusive acesse os projetos abaixo e se possivel me envie um
            feedback no{" "}
            <a
              href="https://www.linkedin.com/in/abnner-borges-05a631255/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .😃
          </p>
        </section>

        <section className="projects">
          <h3>Projetos</h3>

          {/* <section className="containerProjects">
            <button onClick={carouselScrollRight}>
              <FaAngleRight />
            </button>
            <button onClick={carouselScrollLeft}>
              <FaAngleLeft />
            </button>
            <div className="carousel" ref={carousel}>
              {InfoProjects.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </section> */}

          <section className="containerProjects">
            {dataTop5.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
            <button className="seeMoreProjectsButton">
              <span> Ver mais Projetos ...</span>
            </button>
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
