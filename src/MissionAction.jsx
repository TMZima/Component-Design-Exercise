function MissionAction({ updateStatus }) {
  const handleLaunchClick = () => {
    updateStatus("Active");
  };
  const handleCompleteClick = () => {
    updateStatus("Complete");
  };

  return (
    <div className="MissionAction">
      <button
        className="MissionAction-launch-button"
        onClick={handleLaunchClick}
      >
        Launch
      </button>
      <button
        className="MissionAction-complete-button"
        onClick={handleCompleteClick}
      >
        Complete
      </button>
    </div>
  );
}

export default MissionAction;
