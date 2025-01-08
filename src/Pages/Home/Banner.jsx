import ban1 from "../../assets/images/banner/1.jpg"
import ban2 from "../../assets/images/banner/2.jpg"
import ban3 from "../../assets/images/banner/3.jpg"
import ban4 from "../../assets/images/banner/4.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={ban1}
          className="w-full rounded-lg"
        />
         <div className="absolute h-full rounded-lg top-0 left-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-3/4 lg:w-1/3 ml-4">
            <h2 className="text-6xl font-extrabold">Affordable Price For Car Servicing</h2>
            <p className="text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="btn bg-orange-500 font-extrabold mr-6 mb-2 text-white border-orange-200 border-2">Discover More</button>
                <button className="btn btn-outline text-orange-500 font-extrabold border-2 border-orange-500">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={ban2}
          className="w-full rounded-lg"
        />
        <div className="absolute h-full rounded-lg top-0 left-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-3/4 lg:w-1/3 ml-4">
            <h2 className="text-6xl font-extrabold">Affordable Price For Car Servicing</h2>
            <p className="text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="btn bg-orange-500 font-extrabold mr-6 mb-2 text-white border-orange-200 border-2">Discover More</button>
                <button className="btn btn-outline text-orange-500 font-extrabold border-2 border-orange-500">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={ban3}
          className="w-full rounded-lg"
        />
        <div className="absolute h-full rounded-lg top-0 left-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-3/4 lg:w-1/3 ml-4">
            <h2 className="text-6xl font-extrabold">Affordable Price For Car Servicing</h2>
            <p className="text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="btn bg-orange-500 font-extrabold mr-6 mb-2 text-white border-orange-200 border-2">Discover More</button>
                <button className="btn btn-outline text-orange-500 font-extrabold border-2 border-orange-500">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={ban4}
          className="w-full rounded-lg"
        />
        <div className="absolute h-full rounded-lg top-0 left-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-3/4 lg:w-1/3 ml-4">
            <h2 className="text-6xl font-extrabold">Affordable Price For Car Servicing</h2>
            <p className="text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="btn bg-orange-500 font-extrabold mr-6 mb-2 text-white border-orange-200 border-2">Discover More</button>
                <button className="btn btn-outline text-orange-500 font-extrabold border-2 border-orange-500">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
