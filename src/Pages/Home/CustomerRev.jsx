import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const CustomerRev = () => {
  return (
    <div className="my-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-orange-500">
          Testimonial
        </h1>
        <p className="text-4xl font-bold mt-4">What Customer Says</p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
        Would you like something more creative or specific to your garage?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="space-y-2 border-2 border-b-4 border-b-[#000080] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co.com/RDxWvzd/tasnim.jpg" alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h1 className="text-xl font-extrabold">Tasnim</h1>
                <h3 className="text-base-300">Chartered Accountant</h3>
              </div>
            </div>
            <LuQuote className="text-2xl text-orange-500"></LuQuote>
          </div>
          <p>
          I recently took my car to CarDoctor, and I am thoroughly impressed with the service! The staff were friendly and professional, and they explained the entire process in detail. My car feels as good as new, and they completed the service on time. The waiting area was clean and comfortable, which was a bonus. Highly recommend CarDoctor for anyone needing reliable car services!
          </p>
          <div className="flex gap-2">
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStarHalfAlt className="text-orange-500 text-xl"></FaStarHalfAlt>
          </div>
        </div>
        <div className="space-y-2 border-2 border-b-4 border-b-[#000080] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co.com/SPmBSvX/Rohan.jpg" alt="" className="w-16 h-16 rounded-full" />
              <div>
                <h1 className="text-xl font-extrabold">Rohan</h1>
                <h3 className="text-base-300">IPE Engineer</h3>
              </div>
            </div>
            <LuQuote className="text-2xl text-orange-500"></LuQuote>
          </div>
          <p>
          CarDoctor is the best garage I’ve been to! I brought my car in for brake repairs, and they did a fantastic job. The mechanics were knowledgeable and took the time to explain what needed to be fixed. The pricing was fair, and they finished the job quicker than I expected. My car is running perfectly now. Definitely my go-to place for any car issues. Highly recommend!
          </p>
          <div className="flex gap-2">
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStar className="text-orange-500 text-xl"></FaStar>
            <FaStarHalfAlt className="text-orange-500 text-xl"></FaStarHalfAlt>
            <FaRegStar className="text-orange-500 text-xl"></FaRegStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRev;
