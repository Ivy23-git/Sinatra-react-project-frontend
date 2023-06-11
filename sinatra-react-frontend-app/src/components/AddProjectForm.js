import React, { useState } from 'react';

const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = async (event) => {
    event.preventDefault();
    try {
      // Make API request to the backend for user sign-up
      const response = await fetch('http://localhost:9292/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          title,
          description,
        }),
      });
      if (response.status === 201) {
        // Handle successful project addition response
        console.log('Project added successfully');
      } else {
        // Handle project addition error response
        console.log('Failed to add project');
      }
    } catch (error) {
      console.error('Failed to add project', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddProject}>
        <h2>Add Project</h2>
        <label>
          Name <span>*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Title <span>*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          Description <span>*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
