import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import ProjectCard from "../../Components/ProjectCard";

import InfoProjects from "../../Data/InfoProjects";

import "./style.css";

export default function AllProjects() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="pageAllProjects">
        <h2>Projetos</h2>
        <section className="containerAllProjects">
          {InfoProjects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
