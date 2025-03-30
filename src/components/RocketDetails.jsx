import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import './RocketDetails.css';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  return res.json();
};

const RocketDetailsPage = () => {
  const { rocketName } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useSWR(
    `https://api.spacexdata.com/v3/rockets/${rocketName}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (isLoading) return <p>Ładowanie szczegółów...</p>;
  if (error) return <p style={{ color: 'red' }}>{error.message}</p>;
  if (!data) return <p>Nie znaleziono rakiety</p>;

  return (
    <div className="rocket-details-modal">
      <button className="close-button" onClick={() => navigate('/rockets')}>X</button>
      <h2 className="rocket-title">{data.rocket_name}</h2>
      <p className="rocket-description">{data.description}</p>
      <img
        src={data.flickr_images[0]}
        alt={data.rocket_name}
        className="rocket-image-details"
      />
    </div>
  );
};

export default RocketDetailsPage;


