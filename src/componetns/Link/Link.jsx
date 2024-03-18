import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name,path}= route
    return (
        <li className="mr-10 hover:border-b-4 border-red-700">
            <a href={path}>{name} </a>
        </li>
    );
};

Link.propTypes ={
    route:PropTypes.object
}
export default Link;