import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInterceptors";

const Output = ({sourceCode,currentModel}) => {
    const [output,setOutput] = useState([]); 
    const [description,setDescription] = useState(""); 
    const {accessToken} = useSelector(state => state.user);
    const handleSubmission = async () => {
        try {
            const response = await axiosInstance({
                method: 'post',
                url: `http://localhost:3000/api/user/submissions`,
                data: {
                    sourceCode,
                    model: currentModel
                }
            });
            const { output:result } = response.data;
            // console.log(result)
            if(result && result.status) {
                if(result.status.id===3){
                    const res = result.stdout?.split('\n');
                    // console.log('res',res)
                    setOutput(res?res:[]);
                    setDescription(result.status.description);
                    // setTimeTaken(result.time)
                }
                else {
                    const res = result.stderr?.split('\n');
                    setOutput(res?res:[]);
                    setDescription(result.status.description);
                }
            }
        } catch (error) {
            console.log('Error',error.response);
            if(error.status===429) {
                setOutput([error.response.data.message]);
            }
        }
    }

    return (
        <>
            <div className="text-white" >
                <div className="submit w-full flex justify-between" style={{ backgroundColor: "rgb(30,30,30)"}}>
                    {/* <div className="time">
                        Time: 
                    </div> */}
                    <div className="description ml-5">
                        {description}
                    </div>
                    <button 
                        className={`px-2 py-0.5 rounded hover:cursor-pointer bg-green-600 mr-5`} 
                        onClick={handleSubmission}>
                        Submit
                    </button>
                </div>
                <div className="output p-5 overflow-y-scroll">
                    {
                        (output.length>0) ? 
                            <ul>
                                {
                                    output.map((line,index) => {
                                        return <li key={index}>{line}</li>
                                    })
                                }
                            </ul>
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default Output