import { projects } from "@/data/projects";

export const ProjectMapper = () => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title}>
          <img src={project.thumbnail} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.github && <a href={project.github}>GitHub</a>}
        </div>
      ))}
    </>
  );
};