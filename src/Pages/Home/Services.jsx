import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch("https://car-doctor-server-three-topaz.vercel.app/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-orange-500">Services</h1>
                <p className="text-4xl font-bold mt-4">Our services Area</p>
                <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">Discover our wide range of services, from routine maintenance to complex repairs. At CarDoctor, we ensure your vehicle gets the care it needs for a safe and smooth drive!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;