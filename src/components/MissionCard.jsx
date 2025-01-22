import "./MissionCard.css";

function MissionCard({ name, status, crew }) {
  return (
    <>
      <h2 className="MissionCard-title">{name}</h2>
      <p className="MissionCard-detail">Status: {status}</p>
      <p className="MissionCard-detail">Crew: {crew.join(", ")}</p>
    </>
  );
}

export default MissionCard;
