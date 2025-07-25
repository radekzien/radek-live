"use client"
import { projects } from "@/data/projects";
import { githubMarkWhite } from '@/data/ImageLinks';
import { FadeInSection } from "./ui/FadeInSection";
import { tagColors } from "@/data/tagColors";
import { useEffect, useRef, useState } from "react";
import { filterpng } from "@/data/ImageLinks";

export const ProjectMapper = () => {
  //Filter Constants
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  //UseEffect for clicking off tag menu
  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setShowFilter(false);
    }
  }

  if (showFilter) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  // Cleanup on unmount
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showFilter]);

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags || []))
  );

  // Toggle a tag in selectedTags array
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Filter projects by selectedTags (OR filter)
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => 
        project.tags?.some(tag => selectedTags.includes(tag))
      );

  return (
    <>
      {/* Button to toggle filter panel */}
      <div className="relative inline-flex items-start mb-4"  ref={wrapperRef}>
        <button
          onClick={() => setShowFilter(prev => !prev)}
          className="mb-4 px-3 py-1 mb-4 text-sm bg-gray-600 text-white rounded hover:bg-slate-700 transition"
        >
          <img src={filterpng} className="w-4 h-5"></img>
        </button>

        {/* Tag filter checkboxes */}
        {showFilter && (
          <div className="absolute top-0 left-full ml-2 p-4 border rounded bg-gray-800 text-white max-w-md shadow-lg z-50"
            style={{ minWidth: "240px" }}>

            <p className="mb-2 font-semibold">Select Tags to Filter:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {allTags.map(tag => {
                const isSelected = selectedTags.includes(tag)
                return (
                <span key={tag} onClick={() => toggleTag(tag)} className={`
                border-1 shadow-md px-2 py-1 text-xs text-white font-bold rounded-full mr-2 cursor-pointer
                ${isSelected ? tagColors[tag] : "bg-transparent text-white border-white hover:bg-gray-700"}
              `}>
                {tag}</span>
                )
              })}
              {/*Clear Tags Button*/}
              <button
              onClick={() => {
                  setSelectedTags([]);
                  setShowFilter(false);
                }}
                className="mt-4 px-3 py-1 bg-red-600 rounded hover:bg-red-300 transition text-xs">
                Clear tags
            </button>
            </div>
          </div>
        )}
      </div>

      {/*Project Mapper*/}
      {filteredProjects.map((project) => (
          <FadeInSection key={project.title} >
            <div className="p-4 rounded-lg w-60 h-120 shadow mb-4 bg-[#383535] flex flex-col hover:scale-105 transition-all duration-500">
              <img src={project.thumbnail}></img>
                <h3 className="p-2 text-lg font-bold justify-center text-center">{project.title}</h3>
                <p className="text-center">{project.description}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags && (
                    project.tags.map((tag, index) => (
                      <span key={tag} className={`shadow-md px-2 py-1 text-xs text-white font-bold rounded-full mr-2 ${tagColors[tag]} hover:scale-105 transition-all duration-300 cursor-pointer`}>
                        {tag}
                      </span>
                    )
                    )
                  )}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-auto flex pt-4">
                    <img src={githubMarkWhite} alt="GitHub Logo" className="w-6 h-6 hover:scale-110 transition-all duration-300" />
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