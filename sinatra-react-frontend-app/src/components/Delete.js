import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteButton = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Make API request to the backend for user deletion
      const response = await fetch('http://localhost:9292/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        // Optionally, you can include a request body if needed
        // body: JSON.stringify({ userId: 123 })
      });

      if (response.ok) {
        // Handle successful deletion response
        // Redirect to another page or perform any other desired action
        navigate('/');
        console.log('User deleted successfully');
      } else {
        // Handle deletion error response
        console.log('User deletion failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="deleteButtonContainer">
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteButton;
