import React from 'react';


interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  img?: string | null;
  show?: boolean;
  sort?: number;
}

interface ProjectListProps {
  projects: Project[];
  intro?: string;
}


import fallbackImage from '../assets/no_image.png';

const ProjectList: React.FC<ProjectListProps> = ({ projects, intro }) => {
  const sortedProjects = [...projects].sort((a, b) => {
    const aSort = typeof a.sort === 'number' ? a.sort : Number.MAX_SAFE_INTEGER;
    const bSort = typeof b.sort === 'number' ? b.sort : Number.MAX_SAFE_INTEGER;
    return aSort - bSort;
  });

  return (
    <>
      {intro && (
        <div className="project-intro" style={{ marginBottom: 16 }}>
          <p dangerouslySetInnerHTML={{ __html: intro }} />
        </div>
      )}
      <div className="project-list">
        {sortedProjects.filter(project => project.show !== false).map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.img ? project.img : fallbackImage}
              alt={project.title}
              onError={e => (e.currentTarget.src = fallbackImage)}
              style={{ width: '100%', maxWidth: 300, borderRadius: 8, marginBottom: 8 }}
            />
            <h2>{project.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
            <div style={{ marginTop: 8 }}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
