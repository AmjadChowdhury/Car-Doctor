import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  // console.log(pages)

  useEffect(() => {
    fetch(`https://car-doctor-server-three-topaz.vercel.app/services?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [currentPage,itemsPerPage]);
  useEffect(() => {
    fetch("https://car-doctor-server-three-topaz.vercel.app/servicesCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleItemsPerpage = (e) => {
    console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-[#123458]">
          Services
        </h1>
        <p className="text-2xl lg:text-4xl font-bold mt-4">Our services Area</p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
          Discover our wide range of services, from routine maintenance to
          complex repairs. At CarDoctor, we ensure your vehicle gets the care it
          needs for a safe and smooth drive!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center my-4 pagination">
        <button onClick={handlePrev} className="btn mr-1">
          <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn mr-1 ${currentPage === page ? "selected" : ''}`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="btn mr-1">
          <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
        </button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerpage}
          className=""
          name=""
          id=""
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default Services;
