import PropTypes from 'prop-types';
import { FaCheckDouble } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div className='text-xl m-2'>
            <p className='flex items-center'> <FaCheckDouble className='mr-2'></FaCheckDouble>{feature}</p>
        </div>
    );
};
Feature.propTypes= {

    feature:PropTypes.string.isRequired
}

export default Feature;