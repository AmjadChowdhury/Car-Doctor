import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomerRev = () => {
  const [reviews,setReviews] = useState([])
  useEffect(()=> {
      axios.get('https://car-doctor-server-three-topaz.vercel.app/servicesReview')
      .then(res => {
        setReviews(res.data)
      })
  },[])
  return (
    <div className="pb-2">
    
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-orange-500">
          Testimonial
        </h1>
        <p className="text-2xl lg:text-4xl font-bold mt-4">What Customer Says</p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
        Would you like something more creative or specific to your garage?
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          reviews.map(review => <div key={review._id} className="space-y-2 border-2 border-b-4 border-b-[#000080] p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={review.userImg} alt="" className="w-16 h-16 rounded-full" />
                <div>
                  <h1 className="text-xl font-extrabold">{review.name}</h1>
                  <h3 className="text-base-300">{review.profession}</h3>
                </div>
              </div>
              <LuQuote className="text-2xl text-orange-500"></LuQuote>
            </div>
            <p>{review.review}</p>
            <div className="flex gap-2">
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStarHalfAlt className="text-orange-500 text-xl"></FaStarHalfAlt>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default CustomerRev;
