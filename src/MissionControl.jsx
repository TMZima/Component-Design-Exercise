function MissionControl({ missions = [] }) {
  return (
    <div>
      <ul>
        {missions.map((m) => {
          return <li key={m.id}>Mission Name: {m.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default MissionControl;
