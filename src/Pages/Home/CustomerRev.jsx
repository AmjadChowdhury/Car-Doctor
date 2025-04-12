import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import './CustomerRev.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const CustomerRev = () => {
  const [reviews, setReviews] = useState([]);
  const [count,setCount] = useState(0)
  const [currentPage,setCurrentPage] = useState(0)
  const itemsPerPage = 2
  const numberOgPages = Math.ceil(count/itemsPerPage)
  const pages = []

  for(let i=0;i<numberOgPages;i++){
    pages.push(i)
  }

  useEffect(()=>{
    axios.get('https://car-doctor-server-three-topaz.vercel.app/servicesReviewCount')
    .then(res => {
      setCount(res.data.count)
    })
  })
  useEffect(() => {
    axios
      .get(`https://car-doctor-server-three-topaz.vercel.app/servicesReview?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setReviews(res.data);
      });
  }, [currentPage,itemsPerPage]);

  const handlePrev = () => {
    if(currentPage>0){
      setCurrentPage(currentPage-1)
    }
  }
  const handleNext = () => {
    if(currentPage<numberOgPages-1){
      setCurrentPage(currentPage+1)
    }
  }
  return (
    <div className="pb-2">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-[#123458]">
          Testimonial
        </h1>
        <p className="text-2xl lg:text-4xl font-bold mt-4">
          What Customer Says
        </p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
          Would you like something more creative or specific to your garage?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="space-y-2 border-2 border-dotted border-b-[#000080] p-4 rounded-lg flex flex-col border-[#D4C9BE]"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={review.userImg}
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-extrabold">{review.name}</h1>
                  <h3 className="text-base-300">{review.profession}</h3>
                </div>
              </div>
              <LuQuote className="text-2xl text-[#123458]"></LuQuote>
            </div>
            <p className="flex-1">{review.review}</p>
            <div className="flex gap-2">
              {/* <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStar className="text-orange-500 text-xl"></FaStar>
              <FaStarHalfAlt className="text-orange-500 text-xl"></FaStarHalfAlt> */}
              {Array.from({ length: 5 }).map((_, index) => {
                if (index + 1 <= review.rating) {
                  return (
                    <FaStar key={index} className="text-[#123458] text-xl" />
                  );
                } else if (index + 0.5 <= review.rating) {
                  return (
                    <FaStarHalfAlt
                      key={index}
                      className="text-[#123458] text-xl"
                    />
                  );
                } else {
                  return (
                    <FaRegStar
                      key={index}
                      className="text-[#123458] text-xl"
                    />
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination flex justify-center my-2">
        <button className="btn mr-1" onClick={handlePrev}><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft></button>
        {
          pages.map(page => <button 
            key={page}
            className={`btn mr-1 ${currentPage === page ? 'selected': ''}`}
            onClick={()=> setCurrentPage(page)}>{page}</button>)
        }
        <button className="btn mr-1" onClick={handleNext}><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
      </div>
    </div>
  );
};

export default CustomerRev;
