import React, { useState } from 'react';
import './AddProjectForm.css';

const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
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

      if (response.ok) {
        // Project creation successful
        // Reset the form fields
        setName('');
        setTitle('');
        setDescription('');
        alert('Project created successfully!');
      } else {
        // Project creation failed
        const error = await response.json();
        alert(`Failed to create project: ${error.error}`);
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('An error occurred while creating the project. Please try again.');
    }
  };

  return (
    <div className="add-project-form">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
