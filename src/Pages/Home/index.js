import { useRef } from "react";

import HeaderFooter from "../../Components/HeaderFooter";
import ProjectCard from "../../Components/ProjectCard";
import InfoProjects from "../../Data/InfoProjects";

import "./styles.css";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

//site usado como referencia https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x

//comentei a area contato pq eu não sei se quero ela na pagina

//Pensando se eu crio uma seção sobre mim/ seção sobre

//dia 20/11/22 to pensando em encerrar o projeto por aqui/ por enquanto
//Pretendo fazer mais projetos para conseguir trabalhar a parte dinamica

export default function Home() {
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
              Seja Bem-vindo! <br /> Eu sou o Abnner Borges
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, modi. Alias voluptatum recusandae perferendis. Ipsa
              quibusdam odit fugiat a nam?
            </p>

            {/* <span>Contact me</span> */}
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
        <section className="languages">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>Javascript</h3>
          <h3>React</h3>
        </section>
        <section className="projects">
          <h3>Projects</h3>

          <section className="containerProjects">
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
          </section>
        </section>
      </main>
      <footer>
        <HeaderFooter />
      </footer>
    </div>
  );
}
