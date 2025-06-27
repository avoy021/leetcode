import { Link } from "react-router-dom"
import logo from "../Images/Logo.png"
import { useDispatch, useSelector } from "react-redux"
import { reset,logout as logoutAction } from "../features/user/userSlice";
import axios from "axios";
const Navbar = () => {
    const {accessToken} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const logout = async() => {
        dispatch(logoutAction());
    }

    return (
        <>
            <div className="nav h-14 bg-black text-gray-400 flex items-center">
                <div className="container m-auto w-3/4 flex justify-around items-center">
                    <div className="left-side w-1/2 flex justify-start gap-8 text-lg">
                        <div className="logo flex items-center"><img src={logo} className="w-6 h-6"/></div>
                        <p><Link to="/">Explore</Link></p>
                        <p><Link to="/problemset">Problems</Link></p>
                    </div>
                    <div className="right-side w-1/2 flex justify-end gap-2">
                        {
                            accessToken ? (
                                <p><Link to="" onClick={logout}>Logout</Link></p>
                            )
                            :   
                            <>
                                <p><Link to="/accounts/register">Register</Link></p>
                                <p>or</p>
                                <p><Link to="/accounts/login">Sign in</Link></p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Navbar