import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const RequireAuth = ({allowedRole}) => {
    const {role,username,accessToken} = useSelector(state => state.user);
    return (
        <>
            {
                accessToken && allowedRole.includes(role) 
                ? <Outlet/> 
                : accessToken 
                ? <Navigate to="/unauthorized"/>
                : <Navigate to="/accounts/login"/>   
            }
        </>
    )
}

export default RequireAuth