import team1 from "../../assets/images/team/1.jpg";
import team2 from "../../assets/images/team/2.jpg";
import team3 from "../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <div className="my-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-orange-500">Team</h1>
        <p className="text-4xl font-bold mt-4">Meet Our Team</p>
        <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={team1} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-orange-500">
              <p className="flex items-center mr-10">Engine Expert</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={team2} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-orange-500">
              <p className="flex items-center mr-10">Engine Expert</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 border-2 border-b-4 border-b-[#000080] border-base-200">
          <figure className="px-10 pt-10 h-full">
            <img src={team3} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold uppercase">
              Car Engine Plug
            </h2>
            <div className="flex justify-between items-center text-xl font-bold uppercase text-orange-500">
              <p className="flex items-center mr-10">Engine Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
