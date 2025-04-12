import team1 from "../../assets/images/team/1.jpg";
import team2 from "../../assets/images/team/2.jpg";
import team3 from "../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <div className="my-4">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-[#123458]">Team</h1>
        <p className="text-2xl lg:text-4xl font-bold mt-4">Meet Our Team</p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
        Meet the passionate professionals behind CarDoctor! Our skilled and dedicated team works tirelessly to deliver exceptional service, ensuring your car gets the care it deserves.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 border-2 border-dotted border-[#123458]">
          <figure className="px-10 pt-10 h-full">
            <img src={team1} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-sm lg:text-xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <p className="flex justify-between items-center text-sm lg:text-base font-bold uppercase text-[#123458]">
              Engine Expert
            </p>
          </div>
        </div>

        <div className="card bg-base-100 border-2 border-dotted border-[#123458]">
          <figure className="px-10 pt-10 h-full">
            <img src={team2} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-sm lg:text-xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <p className="flex justify-between items-center text-sm lg:text-base font-bold uppercase text-[#123458]">
              Engine Expert
            </p>
          </div>
        </div>

        <div className="card bg-base-100 border-2 border-dotted border-[#123458]">
          <figure className="px-10 pt-10 h-full">
            <img src={team3} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-sm lg:text-xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <p className="flex justify-between items-center text-sm lg:text-base font-bold uppercase text-[#123458]">
              Engine Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
