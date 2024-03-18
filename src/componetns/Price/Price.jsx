import PropTypes from 'prop-types'
import Features from '../Features/Features';
const Price = ({option}) => {
    const {name, price, features}=option
    return (
        <div className='bg-blue-500 text-white p-4 flex flex-col rounded-md'>
            <h4 className='font-bold text-3xl'>{name}</h4>
            <h2>
                <span className='text-3xl'>{price}</span>
            </h2>
           <div className='mt-5 flex-grow'>
           {
                features.map((feature,idx)=> <Features key={idx} feature={feature}></Features>)
            }
           </div>
           <button className='bg-green-500 hover:bg-green-900 mt-5 w-full py-2'>Buy Now</button>
        </div>
    );
};

Price.propTypes = {
    option: PropTypes.object
}
export default Price;