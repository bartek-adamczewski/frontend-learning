import React from 'react';
import './RocketCard.css';
import { useNavigate } from 'react-router-dom';

const RocketCard = ({ rocket }) => {
  const navigate = useNavigate();

  return (
    <li
      className="rocket-card"
      onClick={() => navigate(`/rockets/${rocket.rocket_id}`)}
    >
      <img
        src={rocket.flickr_images[0]}
        alt={rocket.rocket_name}
        className="rocket-image"
      />
      <div className="rocket-info">
        <h3 className="rocket-name">{rocket.rocket_name}</h3>
      </div>
    </li>
  );
};

export default RocketCard;

