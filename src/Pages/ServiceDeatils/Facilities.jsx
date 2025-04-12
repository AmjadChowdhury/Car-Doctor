import PropTypes from "prop-types";

const Facilities = ({fac}) => {
    const {name,details} = fac
    return (
        <div className="p-4 border-dotted border-2 border-t-[#D4C9BE] rounded-lg border-x-2">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <p>{details}</p>
        </div>
    );
};

Facilities.propTypes = {
    fac: PropTypes.object
}

export default Facilities;