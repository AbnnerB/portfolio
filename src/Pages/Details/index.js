import "./styles.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InfoProjects from "../../Data/InfoProjects";

export default function Details() {
  const { id } = useParams();

  const [infoArray, setInfoArray] = useState([]);

  useEffect(() => {
    let filteredArray = InfoProjects.filter((item) => item.id === id);

    setInfoArray(filteredArray);
  }, [id]);

  return (
    <div>
      {infoArray.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <img src={"../" + item.src1} alt="{item.name} " />
        </div>
      ))}
    </div>
  );
}

/* <img src="../assets/spaceTourism1.png" alt="{item.name} " /> */
