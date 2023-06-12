import React, { useState } from 'react';
import './AddProjectForm.css';

const AddProjectMember = () => {
  const [projectId, setProjectId] = useState('');
  const [username, setusername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:9292/project-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_id: projectId,
          username: username
        }),
      });

      if (response.ok) {
        // Project member creation successful
        // Reset the form fields
        setProjectId('');
        setusername('');
        alert('Project member added successfully!');
      } else {
        // Project member creation failed
        const error = await response.json();
        alert(`Failed to add project member: ${error.error}`);
      }
    } catch (error) {
      console.error('Error adding project member:', error);
      alert('An error occurred while adding the project member. Please try again.');
    }
  };

  return (
    <div className="add-project-form">
      <h2>Add Project Member</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project ID:
          <input
            type="text"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </label>
        <label>
          username:
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <button type="submit">Add Project Member</button>
      </form>
    </div>
  );
};

export default AddProjectMember;
