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
          <h3>Projects</h3>

          <section className="containerProjects">
            <button onClick={carouselScrollRight}>
              <FaAngleRight />
            </button>
            <button onClick={carouselScrollLeft}>
              <FaAngleLeft />
            </button>
            <div className="carousel" ref={carousel}>
              {InfoProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
      <footer className="containerContact">
        {/* <section className="contact">
          <div className="contactContent">
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
        </section> */}
      </footer>
      <HeaderFooter />
    </div>
  );
}
