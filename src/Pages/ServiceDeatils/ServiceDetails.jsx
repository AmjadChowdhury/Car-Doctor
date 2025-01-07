import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const serviceCollection = useLoaderData()
    const {_id} = serviceCollection
    console.log(serviceCollection)
    return (
        <div>
            <h1>hello : {_id}</h1>
        </div>
    );
};

export default ServiceDetails;