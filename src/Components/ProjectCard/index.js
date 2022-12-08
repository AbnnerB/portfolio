export default function ProjectCard({ item }) {
  return (
    <div className="projectCard">
      <img src={item.src1} alt="projeto22" />
      <h3>{item.name}</h3>
      <span>{item.technologiesUsed}</span>
    </div>
  );
}
