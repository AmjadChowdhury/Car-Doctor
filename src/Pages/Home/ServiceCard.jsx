import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
      <figure className="px-10 pt-10 h-full">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-sm lg:text-xl font-extrabold uppercase">
          {title}
        </h2>
        <div className="flex justify-between items-center text-sm lg:text-base font-bold uppercase text-orange-500">
          <p className="flex items-center">
            Price : <FaDollarSign></FaDollarSign> {price}
          </p>
        </div>
      </div>
      <Link to={`/service/${_id}`}>
        <div className="bg-orange-400 hover:bg-orange-500 text-center font-bold rounded-b-lg text-white">
          <h1 className="flex justify-center items-center text-sm lg:text-xl py-2">
            Add to cart{" "}
            <span className="ml-2">
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
            </span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
