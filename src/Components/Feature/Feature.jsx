import PropTypes from 'prop-types';
import { BsCheckCircleFill } from 'react-icons/bs';


const Feature = ({ feature }) => {
    return (
        <div >
            <p className='flex items-center'> <BsCheckCircleFill className='text-blue-600 mr-2'></BsCheckCircleFill>{feature}</p>



        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}


export default Feature;