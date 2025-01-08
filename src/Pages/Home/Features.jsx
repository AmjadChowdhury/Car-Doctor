import { RiTeamFill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";
import { LuThumbsUp } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

const Features = () => {
    return (
        <div className="my-4">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-orange-500">Core Featurs</h1>
                <p className="text-4xl font-bold mt-4">Why Choose us</p>
                <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="border-2 border-base-200 rounded-lg p-2">
                    <RiTeamFill className="text-8xl"></RiTeamFill>
                    <p className="text-2xl font-bold">Expert Team</p>
                </div>

                <div className="border-2 border-base-200 rounded-lg p-2 bg-yellow-500">
                    <IoMdTimer className="text-8xl "></IoMdTimer>
                    <p className="text-2xl font-bold">Time Delivery</p>
                </div>

                <div className="border-2 border-base-200 rounded-lg p-2">
                    <MdSupportAgent className="text-8xl text-green-500"></MdSupportAgent>
                    <p className="text-2xl font-bold">24/7 support</p>
                </div>

                <div className="border-2 border-base-200 rounded-lg p-2">
                    <CiDeliveryTruck className="text-8xl text-orange-500"></CiDeliveryTruck>
                    <p className="text-2xl font-bold">Timely</p>
                </div>

                <div className="border-2 border-base-200 rounded-lg p-2">
                    <GrConfigure className="text-8xl"></GrConfigure>
                    <p className="text-2xl font-bold">Best Equip</p>
                </div>

                <div className="border-2 border-base-200 rounded-lg p-2">
                    <LuThumbsUp className="text-8xl text-yellow-500"></LuThumbsUp>
                    <p className="text-2xl font-bold">Guranty</p>
                </div>
            </div>
        </div>
    );
};

export default Features;