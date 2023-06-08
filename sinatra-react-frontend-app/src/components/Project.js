import React, { useState } from 'react';
import ProjectMembers from './ProjectMembers';

function Project({ projectName, period, projectId }) {
  const [showMembers, setShowMembers] = useState(false);
  const [membersButtonVisible, setMembersButtonVisible] = useState(true);

  const handleViewMembers = () => {
    setShowMembers(true);
    setMembersButtonVisible(false);
  };

  const handleCloseMembers = () => {
    setShowMembers(false);
    setMembersButtonVisible(true);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card text-white card-has-bg" style={{ backgroundImage: "url(https://source.unsplash.com/600x900/?tech,street)" }}>
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <h2 className="card-title mt-0 mb-2">{projectName}</h2>
          </div>
          <div className="card-footer">
            <div className="media">
              <div className="media-body">
             
             
              </div>
            </div>
            {membersButtonVisible && (
              <button className="btn btn-primary mt-2" onClick={handleViewMembers}>
                View Members
              </button>
            )}
          </div>
        </div>
      </div>
      {showMembers && (
        <ProjectMembers projectId={projectId} handleCloseMembers={handleCloseMembers} />
      )}
    </div>
  );
}

export default Project;
