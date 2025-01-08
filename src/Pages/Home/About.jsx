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
          <h1 className="text-5xl font-extrabold text-orange-500">About Us!</h1>
          <h1 className="font-bold text-4xl mt-4">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          {
            moreMsg && <p className="pb-2">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          }
          <button className={`btn bg-orange-500 font-extrabold text-white`} onClick={handleMore}>{`${moreMsg? 'Less Info': 'Get More Info'}`}</button>
        </div>
      </div>
    </div>
  );
};

export default About;
