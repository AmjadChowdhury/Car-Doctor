import { useLoaderData } from "react-router-dom";
import Facilities from "./Facilities";
import ServiceRight from "./ServiceRight";


const ServiceDetails = () => {
    const serviceCollection = useLoaderData()
    const { title,img,description,facility } = serviceCollection
    console.log(serviceCollection)
    console.log(facility)
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <img src={img} alt="" className="w-full rounded-lg" />
                    <h1 className="text-4xl font-extrabold m-2">{title}</h1>
                    <p className="m-2">{description}</p>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            facility.map((fac,idx) => <Facilities 
                            key={idx}
                            fac={fac}></Facilities>)
                        }
                    </div>

                    <div className="my-4">
                        <h1 className="text-4xl font-extrabold">3 Simple steps to process</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-2 border-2 border-base-200 rounded-lg">
                                <p className="p-6 rounded-full bg-orange-200 w-1/5 text-center"><span className="bg-orange-500 p-3 rounded-full text-2xl font-extrabold">01</span></p>
                                <h1 className="text-2xl font-bold">Step 1</h1>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>

                            <div className="p-2 border-2 border-base-200 rounded-lg">
                                <p className="p-6 rounded-full bg-orange-200 w-1/5 text-center"><span className="bg-orange-500 p-3 rounded-full text-2xl font-extrabold">02</span></p>
                                <h1 className="text-2xl font-bold">Step 2</h1>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>

                            <div className="p-2 border-2 border-base-200 rounded-lg">
                                <p className="p-6 rounded-full bg-orange-200 w-1/5 text-center"><span className="bg-orange-500 p-3 rounded-full text-2xl font-extrabold">03</span></p>
                                <h1 className="text-2xl font-bold">Step 3</h1>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                    </div>
                </div>
               <ServiceRight serviceCollection={serviceCollection}></ServiceRight>
            </div>
        </div>
    );
};

export default ServiceDetails;