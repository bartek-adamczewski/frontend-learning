import React, { useState } from "react";
import RocketCard from "./RocketCard";
import RocketDetails from "./RocketDetails";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

const DataFetchingComponent = () => {
  const [selectedRocketId, setSelectedRocketId] = useState(null);

  const { data, error, isLoading } = useSWR(
    "https://api.spacexdata.com/v3/rockets",
    (url) => fetcher(url, 3000),
    { revalidateOnFocus: false },
  );

  if (isLoading)
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center text-center bg-white">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4" />
        <p className="text-gray-700 text-lg">Ładowanie danych...</p>
      </div>
    );

  if (error) return <div className="text-red-500">{error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-8 box-border">
      <h2 className="text-black-500 text-4xl font-bold mb-4">Rakiety SpaceX</h2>
      <ul className="grid grid-cols-[repeat(2,300px)] gap-8 justify-center">
        {data.map((rocket) => (
          <RocketCard
            key={rocket.rocket_id}
            rocket={rocket}
            onClick={(rocket) => setSelectedRocketId(rocket.rocket_id)}
          />
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
