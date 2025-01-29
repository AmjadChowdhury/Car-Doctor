import PropTypes from "prop-types";

const Facilities = ({fac}) => {
    const {name,details} = fac
    return (
        <div className="p-4 border-t-4 border-b-2 border-t-orange-500 rounded-lg border-y-2 border-dotted">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{details}</p>
        </div>
    );
};

Facilities.propTypes = {
    fac: PropTypes.object
}

export default Facilities;