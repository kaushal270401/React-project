import { Link } from "react-router-dom";
const Notfound = () => {
    return (
        
        <div className="Not-found">
            <h2>Sorry</h2>
            <p>That page cannout be found</p>
            <Link to="/">go to the homepage</Link>
        </div>
    );
}
 
export default Notfound;