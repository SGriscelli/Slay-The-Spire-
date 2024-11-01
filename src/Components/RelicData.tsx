import relics from './RelicList';

const RelicData: React.FC = () => {
  const sortedRelics = relics.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="relics-container">
      {sortedRelics.map((relic) => (
        <div className="relic" key={relic.name}>
          <img src={relic.image} alt={relic.name} className="relics-img" />
          <h3 className="relicName">{relic.name}</h3>
          <div className="relic-description">
            {relic.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelicData;