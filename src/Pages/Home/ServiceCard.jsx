import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card bg-base-100 border-2 border-base-200">
      <figure className="px-10 pt-10 h-full">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <Link to={`/service/${_id}`}>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-extrabold uppercase">{title}</h2>
        <div className="flex justify-between items-center text-xl font-bold uppercase text-yellow-500">
            <p className="flex items-center mr-10">Price : <FaDollarSign></FaDollarSign> {price}</p>
            <p><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></p>
        </div>
      </div>
      </Link>
    </div>
  );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;
