import { projects } from "@/data/projects";
import { githubMarkWhite } from '@/data/ImageLinks';

export const ProjectMapper = () => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.title} className="p-4 border rounded shadow mb-4">
          <img src={project.thumbnail} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
           {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={githubMarkWhite} alt="GitHub Logo" className="w-6 h-6 hover:scale-110" />
            </a>
          )}
          {project.link && (
            <a href = {project.link} target = "_blank" rel="noopener noreferrer"></a>
          )}
        </div>
      ))}
    </>
  );
};