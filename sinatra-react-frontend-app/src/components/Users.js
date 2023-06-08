import React, { useState, useEffect } from 'react';
import './Users.css';


function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:9292/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError('Error occurred while fetching users.');
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9292/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle successful deletion
        // Refresh the users list
        fetchUsers();
        console.log('User deleted successfully');
      } else {
        // Handle deletion error response
        console.log('User deletion failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="usersContainer">
      <h2>Users</h2>
      <table className="usersTable">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
