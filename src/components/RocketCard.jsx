import { useNavigate } from "react-router-dom";

const RocketCard = ({ rocket }) => {
  const navigate = useNavigate();

  return (
    <li
      className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
      onClick={() => navigate(`/rockets/${rocket.rocket_id}`)}
    >
      <img
        src={rocket.flickr_images[0]}
        alt={rocket.rocket_name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center text-gray-800">
          {rocket.rocket_name}
        </h3>
      </div>
    </li>
  );
};

export default RocketCard;
