import React, { useState, useEffect } from 'react';

function ProjectMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:9292/members');
        const data = await response.json();
        setMembers(data);
        setLoading(false);
      } catch (error) {
        setError('Error occurred while fetching project members.');
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  if (loading) {
    return <div>Loading project members...</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  if (members.length === 0) {
    return <div>No project members found.</div>;
  }

  return (
    <div>
      <h2>Project Members</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.username}</td>
              <td>{member.email}</td>
              <td>{member.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectMembers;
