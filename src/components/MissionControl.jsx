import { useState } from "react";

import "./MissionControl.css";

import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

function MissionControl({ initialMissions }) {
  const INITIAL_FILTER = "All";

  const [missions, setMissions] = useState(initialMissions);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  function updateMissionStatus(id, newStatus) {
    setMissions((prevMissions) =>
      prevMissions.map((mission) =>
        mission.id === id ? { ...mission, status: newStatus } : mission
      )
    );
  }

  const filteredMissions = missions.filter(
    (mission) => filter === "All" || mission.status === filter
  );

  return (
    <div>
      <h1>Space Mission Control</h1>

      <div className="MissionControl-filter-container">
        <MissionFilter setFilter={setFilter} />
      </div>

      {filteredMissions.map((m) => {
        const { id, name, status, crew } = m;

        return (
          <div key={id} className="MissionControl-mission-container">
            <div>
              <MissionCard name={name} status={status} crew={crew} />
            </div>
            <div>
              <MissionAction
                missionId={id}
                onUpdateMissionStatus={updateMissionStatus}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MissionControl;
