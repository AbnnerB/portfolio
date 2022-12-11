import "./styles.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//import { IconName } from "react-icons/fa";
//FaChalkboard
//FaLaptop
//FaMobileAlt

import InfoProjects from "../../Data/InfoProjects";

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
          <h1>{item.name}</h1>
          <img src={"../" + item.src1} alt="{item.name} " />
          <span>
            Tecnologias utilizadas para desenvolvimento do Projeto:{" "}
            {item.technologiesUsed}
          </span>
          <p>{item.moreInfo}</p>

          <a
            className="linkSections"
            href={item.linkVercel}
            target="_blank"
            rel="noreferrer"
          >
            Veja no site
          </a>

          <Link className="comeBack" to="/">
            Voltar
          </Link>
        </div>
      ))}
    </>
  );
}

/* <img src="../assets/spaceTourism1.png" alt="{item.name} " /> */
