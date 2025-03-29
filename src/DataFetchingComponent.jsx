import React, { useState, useEffect } from 'react';
import RocketCard from './RocketCard';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/rockets');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Wystąpił błąd podczas pobierania danych: ' + error.message);
      } finally {
        await sleep(5000);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div className="spinner" />
        <p>Ładowanie danych...</p>
        <style>{`
          .spinner {
            margin: 0 auto;
            width: 40px;
            height: 40px;
            border: 5px solid #ccc;
            border-top: 5px solid #2196f3;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxHeight: '80vh', overflowY: 'scroll', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>Rakiety SpaceX</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;


