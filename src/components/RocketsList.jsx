import React, { useState, useEffect } from 'react';
import RocketCard from './RocketCard';
import './RocketsList.css';
import useSWR from 'swr';
import RocketDetails from './RocketDetails';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetcher = async (url) => {
  await sleep(3000); 
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  return res.json();
};

const DataFetchingComponent = () => {
  const [selectedRocketId, setSelectedRocketId] = useState(null);
  const { data, error, isLoading } = useSWR(
    'https://api.spacexdata.com/v3/rockets',
    fetcher,
    {
      revalidateOnFocus: false
    }
  );

  if (isLoading)
  return (
    <div className="loading-container">
      <div className="spinner" />
      <p>Ładowanie danych...</p>
    </div>
  );  

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="rocket-list-container">
      <h2>Rakiety SpaceX</h2>
      <ul className="rocket-list">
        {data.map((rocket) => (
          <RocketCard key={rocket.rocket_id} rocket={rocket} onClick={(rocket) => setSelectedRocketId(rocket.rocket_id)} />
        ))}
      </ul>
      {selectedRocketId && (
        <RocketDetails
          id={selectedRocketId}
          onClose={() => setSelectedRocketId(null)}
        />
      )}
    </div>
  );
};

export default DataFetchingComponent;


