import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Oops! Something went wrong</h2>
            <Link to='/'>Get me back to home page</Link>
        </div>
    );
}
 
export default NotFound;