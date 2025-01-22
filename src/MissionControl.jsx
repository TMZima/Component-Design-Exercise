import { useState } from "react";

import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";

function MissionControl({ missions = [] }) {
  // Initialize state to manage mission statuses
  const [missionStatuses, setMissionStatuses] = useState(
    missions.reduce((acc, mission) => {
      acc[mission.id] = mission.status;
      return acc;
    }, {})
  );

  // Update mission status
  const updateMissionStatus = (id, newStatus) => {
    setMissionStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: newStatus,
    }));
  };

  return (
    <>
      {missions.map((m) => (
        <div key={m.id}>
          <MissionCard
            key={`card-${m.id}`}
            missionName={m.name}
            status={missionStatuses[m.id]}
            crew={m.crew}
          />
          <MissionAction
            key={`action-${m.id}`}
            updateStatus={(newStatus) => updateMissionStatus(m.id, newStatus)}
          />
        </div>
      ))}
    </>
  );
}

export default MissionControl;
