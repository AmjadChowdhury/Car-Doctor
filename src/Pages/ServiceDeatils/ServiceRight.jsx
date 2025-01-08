import { FaArrowCircleRight } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import logo from "../../assets/logo.svg"
import { FaDollarSign } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ServiceRight = ({serviceCollection}) => {
    const { _id,price} = serviceCollection
    
    
  return (
    <div className="m-4">
      <div className="bg-base-200 rounded-lg flex flex-col gap-2 p-4">
        <h1 className="text-orange-500 font-extrabold text-2xl text-center mb-2">
          Services
        </h1>
        <h1 className="flex justify-between items-center bg-white p-4 rounded-lg text-xl font-bold hover:bg-orange-500 hover:text-white">
          Full car Repair <FaArrowCircleRight></FaArrowCircleRight>
        </h1>
        <h1 className="flex justify-between items-center bg-white p-4 rounded-lg text-xl font-bold hover:bg-orange-500 hover:text-white">
          Engine Repair<FaArrowCircleRight></FaArrowCircleRight>
        </h1>
        <h1 className="flex justify-between items-center bg-white p-4 rounded-lg text-xl font-bold hover:bg-orange-500 hover:text-white">
          Automatic Services<FaArrowCircleRight></FaArrowCircleRight>
        </h1>
        <h1 className="flex justify-between items-center bg-white p-4 rounded-lg text-xl font-bold hover:bg-orange-500 hover:text-white">
          Engine Oil Change<FaArrowCircleRight></FaArrowCircleRight>
        </h1>
        <h1 className="flex justify-between items-center bg-white p-4 rounded-lg text-xl font-bold hover:bg-orange-500 hover:text-white">
          Battery Charge<FaArrowCircleRight></FaArrowCircleRight>
        </h1>
      </div>

      <div className="bg-black p-4 mt-4 rounded-lg">
        <h1 className="text-3xl font-extrabold text-white my-4">Download</h1>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <FaFileDownload className="text-2xl"></FaFileDownload>
            <div>
              <h1 className="text-xl text-white">Our Brochure</h1>
              <p className="text-base-300">download</p>
            </div>
          </div>
          <FaArrowCircleRight className="text-orange-500 text-2xl"></FaArrowCircleRight>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <FaFileDownload className="text-2xl"></FaFileDownload>
            <div>
              <h1 className="text-xl text-white">Company Details</h1>
              <p className="text-base-300">download</p>
            </div>
          </div>
          <FaArrowCircleRight className="text-orange-500 text-2xl"></FaArrowCircleRight>
        </div>
      </div>

      <div className="bg-black text-center rounded-lg my-4 pt-4">
        <div className="flex justify-center">
           <img src={logo} alt="" />
        </div>
        <p className="text-white">Need Help? We Are Here To Help You</p>
        <div className="relative p-8">
            <div className="bg-white py-8 px-2 text-center  rounded-lg my-2">
               <p className="text-3xl font-bold"><span className="text-orange-500">Car Doctor </span>speacial</p>
               <p>Save up to <span className="text-orange-500">60% off</span></p>
            </div>
            <div className="absolute bottom-5 left-1/2 bg-orange-500 rounded-lg p-2">
                <p>Get a Quote</p>
            </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-2xl font-bold flex items-center">Price : <FaDollarSign></FaDollarSign>{price}</p>
        <Link to={`/bookings/${_id}`}><button className="btn btn-block bg-orange-500 text-white text-lg font-extrabold">Proceed Checkout</button></Link>
        
      </div>
    </div>
  );
};

ServiceRight.propTypes = {
    serviceCollection: PropTypes.object
}

export default ServiceRight;
