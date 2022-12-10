import { Link } from "react-router-dom";

export default function ProjectCard({ item }) {
  return (
    <div className="projectCard">
      <Link to={`/details/${item.id}`}>
        <img src={item.src1} alt="projeto22" />
      </Link>
      {/* <h3>{item.name}</h3> */}
    </div>
  );
}
