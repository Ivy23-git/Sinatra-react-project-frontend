import React, { useState } from 'react';
import ProjectMembers from './ProjectMembers';
import './project.css';

function Project({ projectName, projectId }) {
  const [showMembers, setShowMembers] = useState(false);
  const [membersButtonVisible, setMembersButtonVisible] = useState(true);
  const [editing, setEditing] = useState(false);
  const [newProjectName, setNewProjectName] = useState(projectName);

  const handleViewMembers = () => {
    setShowMembers(true);
    setMembersButtonVisible(false);
  };

  const handleCloseMembers = () => {
    setShowMembers(false);
    setMembersButtonVisible(true);
  };

  const handleEditProject = () => {
    setEditing(true);
  };

  const handleSaveProject = async () => {
    try {
      const response = await fetch(`http://localhost:9292/projects/${projectId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newProjectName,
        }),
      });

      if (response.ok) {
        console.log('Project updated successfully');
        setEditing(false);
        // TODO: Implement any necessary state update or action after saving the project
      } else {
        console.log('Failed to update project');
      }
    } catch (error) {
      console.error('Failed to update project', error);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setNewProjectName(projectName);
  };

  const handleDeleteProject = async () => {
    try {
      const response = await fetch(`http://localhost:9292/projects/${projectId}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        console.log('Project deleted successfully');
        // TODO: Implement any necessary state update or action after deleting the project
      } else {
        console.log('Failed to delete project');
      }
    } catch (error) {
      console.error('Failed to delete project', error);
    }
  };

  return (
    <div className="card-img-overlay d-flex flex-column">
      <div className="card-body">
        {editing ? (
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
        ) : (
          <h2 className="card-title mt-0 mb-2">{projectName}</h2>
        )}
      </div>
      <div className="card-footer">
        <div className="media">
          <div className="media-body">
            {/* Project Members */}
          </div>
        </div>
        {!editing && membersButtonVisible && (
          <button className="btn btn-primary mt-2" onClick={handleViewMembers}>
            View Members
          </button>
        )}
        {editing ? (
          <>
            <button className="btn btn-success mt-2" onClick={handleSaveProject}>
              Save
            </button>
            <button className="btn btn-secondary mt-2" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            {!showMembers && (
              <button className="btn btn-warning mt-2" onClick={handleEditProject}>
                Edit
              </button>
            )}
            <button className="btn btn-danger mt-2" onClick={handleDeleteProject}>
              Delete
            </button>
          </>
        )}
      </div>
      {showMembers && (
        <ProjectMembers projectId={projectId} handleCloseMembers={handleCloseMembers} />
      )}
    </div>
  );
}

export default Project;
