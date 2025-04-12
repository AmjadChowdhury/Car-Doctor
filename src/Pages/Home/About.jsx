import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import { useState } from "react";

const About = () => {
  const [moreMsg,setMoreMsg] = useState(false)

  const handleMore = () =>{
    setMoreMsg(!moreMsg)
  }
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 mt-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#123458]">About Us!</h1>
          <h1 className="font-bold text-2xl lg:text-4xl mt-4">We are qualified & of experience in this field</h1>
          <p className="py-6">
          At CarDoctor, we are committed to providing exceptional car care services with a focus on quality, trust, and customer satisfaction. With skilled professionals and modern tools, we ensure your vehicle stays in top condition, giving you peace of mind on the road. 
          </p>
          {
            moreMsg && <p className="pb-2">Driven by passion and expertise, CarDoctor strives to be your trusted partner for all your car repair and maintenance needs.</p>
          }
          <button className={`btn bg-[#123458] font-extrabold text-white`} onClick={handleMore}>{`${moreMsg? 'Less Info': 'Get More Info'}`}</button>
        </div>
      </div>
    </div>
  );
};

export default About;
