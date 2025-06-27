import { useEffect, useState } from "react"
import { Navbar } from "../Components"
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { setUser } from "../features/user/userSlice"
import axios from "axios"

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/login',
                data: {
                    username, 
                    password   
                },
                withCredentials: true
            })
            const json = await response.data;
            if(json) {
                console.log(json);
                setMessage(json.message);
                setUsername('');
                setPassword('');
                dispatch(setUser({
                    username: json.username,
                    role: json.role,
                    accessToken: json.accessToken
                }))
                navigate('/problemset');
            }
        } catch (error) {
            setMessage(error.response.data.message);
            console.log(error.response.data.message)
        }
    }

    const handleGoogleAuth = async() => {
        try {
            // window.location.href = 'http://localhost:3000/auth/google/login';
            window.open('http://localhost:3000/auth/google/login',"mywindow","location=1,status=1,scrollbars=1, width=800,height=800");
            let listener = window.addEventListener('message', (message) => {
                try {
                    //message will contain reponse mssg
                    const {success,mssg} = message.data;
                    if(success) {
                        const {username,role,accessToken} = message.data;
                        dispatch(setUser({
                            username,
                            role,
                            accessToken
                        }))
                        navigate('/problemset');
                    }
                    else{
                        setMessage(mssg);
                        throw new Error(mssg);
                    }
                } catch (error) {
                    console.log(error.message);
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        setMessage('');
    },[username,password])
    return (
        <>
            <div className="h-screen flex flex-col">
                <Navbar/>
                <div className="register-form bg-gray-100 text-black flex-grow ">
                    <div className="form m-auto flex flex-col justify-center items-center w-1/4 h-full gap-y-6 bg-white px-10">
                        <div className="username w-full">
                            <input type="email" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="text-sm py-2 px-2 w-full outline-none border rounded border-gray-400 focus:border-gray-900 hover:border-gray-900" placeholder="Enter your email" title="Username should be a valid email" required
                            onBlur={(e) => e.target.checkValidity()}/>
                        </div>
                        <div className="password w-full">
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-sm py-2 px-2 w-full outline-none border rounded border-gray-400 focus:border-gray-900 hover:border-gray-900" placeholder="Enter your password"/>
                        </div>
                        <div className={`error-mssg text-red-600 text-center${!message ? "invisible" : ""}`}>
                            <p className="">{message}</p>
                        </div>
                        <button className="text-white px-3 py-1 rounded-sm bg-gray-600 w-full" onClick={handleSubmit}>Login</button>
                        <div className="text-sm">or</div>
                        <button className="text-white px-3 py-1 rounded-sm bg-gray-600 w-full" onClick={handleGoogleAuth}>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login