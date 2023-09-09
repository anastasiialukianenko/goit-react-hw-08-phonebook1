import { HOME_ROUTE } from "config/routes"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectUserAuthentification } from "redux/authReducer"

export const RestrictedRoute = ({ children, redirectTo = HOME_ROUTE }) => {
    const authentificated = useSelector(selectUserAuthentification);

    return authentificated ? <Navigate to={redirectTo} replace /> : children;
}