import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

const RocketDetailsPage = () => {
  const { rocketName } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useSWR(
    `https://api.spacexdata.com/v3/rockets/${rocketName}`,
    fetcher,
    { revalidateOnFocus: false },
  );

  if (isLoading)
    return <p className="text-center text-lg mt-10">Ładowanie szczegółów...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">{error.message}</p>;
  if (!data)
    return <p className="text-center text-lg mt-10">Nie znaleziono rakiety</p>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
          onClick={() => navigate("/rockets")}
        >
          ×
        </button>
        <h2 className="text-3xl font-bold text-center mb-4 text-black-700">
          {data.rocket_name}
        </h2>
        <p className="text-gray-700 mb-4 text-center">{data.description}</p>
        <img
          src={data.flickr_images[0]}
          alt={data.rocket_name}
          className="w-full h-auto rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default RocketDetailsPage;
