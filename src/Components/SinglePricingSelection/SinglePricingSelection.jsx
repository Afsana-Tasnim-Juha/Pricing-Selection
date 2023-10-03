import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const SinglePricingSelection = ({ selection }) => {
    const { name, price, features } = selection;


    return (
        <div className='bg-green-200 rounded-lg p-4 flex flex-col '>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-center my-8'>
                <span className='text-3xl '>
                    {name}
                </span>
            </h4>

            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }

            </div>
            <button className='mt-12 w-full font-bold rounded-lg bg-blue-400 hover:bg-gray-200 py-2'>Order Now</button>
        </div>
    );
};
SinglePricingSelection.propTypes = {
    selection: PropTypes.object
}

export default SinglePricingSelection;