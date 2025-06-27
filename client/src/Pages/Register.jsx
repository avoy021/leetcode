import { useEffect, useState } from "react"
import { Navbar } from "../Components"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/user/register',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                    role: 2001
                })
            })
            if(!response.ok) {
                // setMessage()
                const mssg = JSON.parse(await response.text());
                throw new Error(mssg["message"])
            }
            const json = await response.json();
            if(json) {
                setMessage(json.message)
                setUsername('');
                setPassword('');
                navigate('/accounts/login');
            }
        } catch (error) {
            setMessage(error.message);
            console.log(error.message)
        }
    }

    const handleGoogleAuth = async() => {
        try {
            // window.location.href = 'http://localhost:3000/auth/google/register';
            window.open('http://localhost:3000/auth/google/register',"mywindow","location=1,status=1,scrollbars=1, width=800,height=800");
            let listener = window.addEventListener('message', (message) => {
                try {
                    //message will contain reponse mssg
                    const {success,mssg} = message.data;
                    if(success) {
                        navigate('/accounts/login');
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
                            <input type="email" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="text-sm py-2 px-2 w-full outline-none border rounded border-gray-400 focus:border-gray-900 hover:border-gray-900" placeholder="Username" required/>
                        </div>
                        <div className="password w-full">
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-sm py-2 px-2 w-full outline-none border rounded border-gray-400 focus:border-gray-900 hover:border-gray-900" placeholder="Password" required/>
                        </div>
                        <div className={`error-mssg text-red-600 ${!message? "hidden" : ""}`}>
                            <p>{message}</p>
                        </div>
                        <button className="text-white px-3 py-1 rounded-sm bg-gray-600 w-full" onClick={handleSubmit}>Submit</button>
                        <div className="text-sm">or</div>
                        <button className="text-white px-3 py-1 rounded-sm bg-gray-600 w-full" onClick={handleGoogleAuth}>Sign up with Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register