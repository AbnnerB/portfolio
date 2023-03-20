import Footer from "../../Components/Footer";
import ProjectCard from "../../Components/ProjectCard";
import InfoProjects from "../../Data/InfoProjects";

import "./styles.css";

import TypeWriterEffect from "react-typewriter-effect";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dataTop5 = InfoProjects.slice(0, 5);

  const navigate = useNavigate();

  function linkForProjects() {
    navigate("/allprojects");
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
            Em 2022, decidi seguir minha paixão pela programação e mergulhar
            fundo nesse universo fascinante. Desde o meu primeiro "Hello World",
            fiquei maravilhado com a possibilidade de criar algo do zero usando
            apenas linhas de código.
          </p>
          <p>
            Como desenvolvedor Front-end, aprofundei meus estudos em HTML, CSS,
            JavaScript e React-JS. Aprendi não só a criar interfaces visualmente
            atraentes, mas também a escrever um código limpo, organizado e
            escalável.
          </p>
          <p>
            Além disso, descobri a importância de manter-me atualizado com as
            tendências e tecnologias mais recentes. Participei de cursos,
            desenvolvi projetos, sempre em busca de aprimoramento e novos
            conhecimentos.
          </p>
          <p>
            Cada novo desafio que enfrento é uma oportunidade de crescimento, e
            a possibilidade de contribuir para soluções inovadoras e impactantes
            é o que me mantém apaixonado pela programação. Estou animado para
            continuar aprendendo e evoluindo nessa jornada emocionante.
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

          <section className="containerProjects">
            {dataTop5.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
            <button
              onClick={linkForProjects}
              className="seeMoreProjectsButton in"
            >
              <span> Ver mais Projetos ...</span>
            </button>
          </section>
          <button
            onClick={linkForProjects}
            className="seeMoreProjectsButton out"
          >
            <span> Ver mais Projetos ...</span>
          </button>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
