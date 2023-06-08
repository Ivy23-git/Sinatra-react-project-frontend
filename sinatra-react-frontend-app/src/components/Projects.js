import React, { useState, useEffect } from 'react';
import Project from './Project';
import './project.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectError, setProjectError] = useState(null);
  const [projectLoading, setProjectLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:9292/projects');
        const data = await response.json();
        setProjects(data);
        setProjectLoading(false);
      } catch (error) {
        setProjectError('Error occurred while fetching projects.');
        setProjectLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (projectLoading) {
    return <div>Loading...</div>;
  }

  if (projectError) {
    return <div>Error occurred while fetching projects.</div>;
  }

  if (!Array.isArray(projects) || projects.length === 0) {
    return <div>No projects available.</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <Project
            key={project.id}
            projectName={project.title}
            projectId={project.id}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
