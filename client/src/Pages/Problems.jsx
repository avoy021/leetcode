import { useEffect, useState } from "react"
import { Navbar,LargeBoxLink,Calendar,ProblemHolder } from "../Components"
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInterceptors";

const Problems = () => {
    const [problems,setProblems] = useState([]);
    const {accessToken} = useSelector(state => state.user);

    const getProblemSet = async () => {
        try {
            const response = await axiosInstance({
                method: 'get',
                url: 'http://localhost:3000/api/user/problemset',
            })

            const data = response.data;
            if(data) {
                setProblems(data);
            }
        } catch(error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getProblemSet();
    }, [])

    return (
        <>
            <Navbar/>
            <div className="container m-auto w-3/4 mt-16 flex">
                <div className="left-course-largeBox w-3/4 flex space-x-6 ">
                    <LargeBoxLink Title={"Leetcode's Interview Crash Course"} Description={"System Design for Interviews and Beyond"} BtnDesc={"Start Learning"}/>
                    <LargeBoxLink Title={"Leetcode's Interview Crash Course"} Description={"System Design for Interviews and Beyond"} BtnDesc={"Start Learning"}/>
                    <LargeBoxLink Title={"Leetcode's Interview Crash Course"} Description={"System Design for Interviews and Beyond"} BtnDesc={"Start Learning"}/>
                </div>
                <div className="right-calendar w-1/4">
                    <Calendar/>

                </div>
            </div>
            <div className="problem-set container m-auto w-3/4 mt-12">
                <div className="holder flex w-3/4 justify-around text-gray-400 border-b border-gray-400 pb-2 mb-12">
                    <div className="status grow-0 shrink-0 basis-24 pl-2" >Status</div>
                    <div className="title grow">Title</div>
                    <div className="solution grow-0 shrink-0 basis-24">Solution</div>
                    <div className="acceptance grow-0 shrink-0 basis-32">Acceptance</div>
                    <div className="difficulty grow-0 shrink-0 basis-32">Difficulty</div>
                    <div className="frequency grow-0 shrink-0 basis-28">Frequency</div>
                </div>
                {
                    problems ? problems.map((question) => {
                        return <ProblemHolder Title={question.title} Id={question.id} key={question.id}/>
                    }) : null
                }
                
            </div>
        </>
    )
}

export default Problems