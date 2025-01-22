import "./MissionAction.css";

function MissionAction({ missionId, onUpdateMissionStatus }) {
  return (
    <>
      <button
        className="MissionAction-button-launch"
        onClick={() => onUpdateMissionStatus(missionId, "Active")}
      >
        Launch
      </button>
      <button
        className="MissionAction-button-complete"
        onClick={() => onUpdateMissionStatus(missionId, "Completed")}
      >
        Complete
      </button>
    </>
  );
}

export default MissionAction;
