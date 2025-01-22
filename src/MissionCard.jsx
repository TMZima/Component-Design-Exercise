import MissionControl from "./MissionControl";

function MissionCard({ missionName, status, crew = [] }) {
  return (
    <div className="MissionCard">
      <h2 className="MissionCard-title">{missionName}</h2>
      <p>Status: {status}</p>
      <p>
        Crew: {crew[0]}, {crew[1]}
      </p>
    </div>
  );
}

export default MissionCard;
