import "./MissionFilter.css";

function MissionFilter({ setFilter }) {
  const STATUSES = ["All", "Planned", "Active", "Completed"];
  return (
    <>
      {STATUSES.map((status, index) => (
        <button
          key={index}
          onClick={() => setFilter(status)}
          className="MissionFilter-button"
        >
          {status}
        </button>
      ))}
    </>
  );
}

export default MissionFilter;
