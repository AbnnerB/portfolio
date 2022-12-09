import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InfoProjects from "../../Data/InfoProjects";

export default function Details() {
  const { id } = useParams();

  const [infoArray, setInfoArray] = useState([]);

  console.log(id);

  let filteredArray = InfoProjects.filter((item) => item.id === id);

  // console.log(infoNewArray);

  // console.log(" /////////////// ");

  // console.log(infoArray);

  //  video: 1:02:00 hora de codar

  return (
    <div>
      {/* <h1>{InfoProjects.name}</h1> */}
      {/* {InfoProjects.id === id &&
        InfoProjects.map((item) => (
          <div key={item}>
            <p>{item.name}</p>
          </div>
        ))} */}
      <h1>Balaco baco</h1>
    </div>
  );
}
