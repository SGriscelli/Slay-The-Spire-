import React from 'react';
import { useParams } from 'react-router-dom';
import { relics } from './relics';

const RelicDetail = () => {
  const { name } = useParams();
  const relic = relics.find(r => r.name.toLowerCase() === name);

  if (!relic) {
    return <p>Reliqe non trouvée.</p>;
  }

  return (
    <div className="relic-detail">
      <h2>{relic.name}</h2>
      <img src={relic.image} alt={relic.name} className="relic-detail-image" />
      <p>{relic.description}</p>
      <p>Stratégie de la relique : Ici, tu peux ajouter des détails et des conseils stratégiques pour utiliser la relique {relic.name}.</p>
    </div>
  );
};

export default RelicDetail;
