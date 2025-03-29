import React from 'react';

const RocketCard = ({ rocket }) => {
  return (
    <li style={{ marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
      <h3>{rocket.rocket_name}</h3>
      <img
        src={rocket.flickr_images[0]}
        alt={rocket.rocket_name}
        style={{ width: '300px', borderRadius: '8px' }}
      />
      <p><strong>Kraj:</strong> {rocket.country}</p>
      <p><strong>Firma:</strong> {rocket.company}</p>
      <p><strong>Pierwszy lot:</strong> {rocket.first_flight}</p>
      <p><strong>Koszt startu:</strong> ${rocket.cost_per_launch.toLocaleString()}</p>
      <p><strong>Skuteczność:</strong> {rocket.success_rate_pct}%</p>
      <p>{rocket.description}</p>
    </li>
  );
};

export default RocketCard;
