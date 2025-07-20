import { projects } from "@/data/projects";
import { githubMarkWhite } from '@/data/ImageLinks';
import { FadeInSection } from "./ui/FadeInSection";
import { Tag } from "@/types/Tag";
import { tagColors } from "@/data/tagColors";

export const ProjectMapper = () => {
  return (
    <>
      {projects.map((project) => (
          <FadeInSection key={project.title} >
            <div className="p-4 rounded-lg w-60 h-120 shadow mb-4 bg-[#383535] flex flex-col hover:scale-105">
              <img src={githubMarkWhite}></img>
                <h3 className="p-2 text-lg font-bold justify-center text-center">{project.title}</h3>
                <p className="text-center">{project.description}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags && (
                    project.tags.map((tag, index) => (
                      <span key={tag} className={`shadow-md px-2 py-1 text-xs text-white font-bold rounded-full mr-2 ${tagColors[tag]} hover:scale-105`}>
                        {tag}
                      </span>
                    )
                    )
                  )}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-auto flex pt-4">
                    <img src={githubMarkWhite} alt="GitHub Logo" className="w-6 h-6 hover:scale-110" />
                  </a>
                )}
                {project.link && (
                  <a href = {project.link} target = "_blank" rel="noopener noreferrer"></a>
                )}
                
            </div>
          </FadeInSection>
      ))}
    </>
  );
};