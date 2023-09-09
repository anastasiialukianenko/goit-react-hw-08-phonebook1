import { LOGIN_ROUTE } from "config/routes"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectUserAuthentification } from "redux/authReducer"

export const PrivateRoute = ({ children, redirectTo = LOGIN_ROUTE }) => {
    const authentificated = useSelector(selectUserAuthentification);

    return authentificated ? children : <Navigate to={redirectTo} replace />;
}