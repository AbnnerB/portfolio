import "./styles.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import InfoProjects from "../../Data/InfoProjects";
import Footer from "../../Components/Footer";

export default function Details() {
  const { id } = useParams();

  const [infoArray, setInfoArray] = useState([]);

  useEffect(() => {
    let filteredArray = InfoProjects.filter((item) => item.id === id);

    setInfoArray(filteredArray);
  }, [id]);

  return (
    <>
      {infoArray.map((item) => (
        <div key={item.id} className="PageDetail">
          <Footer />

          <img src={"../" + item.src1} alt="{item.name} " />
          <h1>{item.name}</h1>
          <p>
            Tecnologias utilizadas para desenvolvimento do Projeto:{" "}
            {item.technologiesUsed}
          </p>
          <p>{item.moreInfo}</p>

          <a
            className="linksDetails"
            href={item.linkVercel}
            target="_blank"
            rel="noreferrer"
          >
            Veja no site
          </a>
        </div>
      ))}
    </>
  );
}
