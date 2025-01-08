import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch("https://car-doctor-server-wd9n.vercel.app/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-orange-500">Services</h1>
                <p className="text-4xl font-bold mt-4">Our services Area</p>
                <p className="mt-2 mb-6 w-full lg:w-1/2 m-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
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