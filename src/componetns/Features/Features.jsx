
import PropTypes from 'prop-types'
import { IoIosCheckmark } from "react-icons/io";
const Features = ({feature}) => {
    return (
        <div className=''>
            <p className='flex gap-2 items-center'><IoIosCheckmark /> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string
}
export default Features;