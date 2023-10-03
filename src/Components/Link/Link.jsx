

const Link = ({ route }) => {
    return (
        <li className="mr-6" >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
//Link.propTypes ={
// route: propTypes.array
//}

export default Link;