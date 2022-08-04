
import {Redirect, useLocation} from 'react-router-dom'
import LcStorage from "../../utils/LcStorage";

const ProtectedRoute = ({ children }) => {
    let auth = LcStorage.get('token');
    let location = useLocation();

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Redirect to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;
