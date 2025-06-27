import { useParams } from "react-router-dom"
import { Navbar,Output } from "../Components";
import { useEffect, useRef, useState } from "react";
import Editor from '@monaco-editor/react';
import { language } from "../constants";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInterceptors";

const CodeEditor = () => {
    const { Id,Title } = useParams();
    const [question,setQuestion] = useState({});
    const [model,setModel] = useState("javascript");
    const [value,setValue] = useState("");
    const {accessToken} = useSelector(state => state.user);

    const getDescription = async () => {
        try {
            const response = await axiosInstance({
                method: 'post',
                url: `/api/user/problem/${Id}/${Title}`,
                data: {
                    model
                }
            });
            const data = response.data;
            if(data) {
                // console.log(data)
                setQuestion(data[0]);
                setValue(data[1])
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDescription();
    }, [])

    function handleChangeModel(event)  {
        setModel(language[event.target.id][0])
        // setValue(language[event.target.id][1])
    }
    const editorRef = useRef();
    function handleOnMount(editor) {
        editorRef.current = editor;
        editor.focus();
    }

    return (
        <>
            <Navbar/>
            <div className="main text-white flex w-full h-[calc(100vh-56px)] overflow-hidden">
                <div className="question w-1/2 p-8 space-y-8 flex-col overflow-y-scroll">
                    <div className="title text-xl font-bold">{Id + ". " + Title}</div>
                    <div className="question">{question["question"]}</div>
                    <div className="example">
                        <ul>
                        <strong>Examples</strong>
                        {
                            Object.keys(question).length>0 ? (
                            question.examples.map((item,index) => {
                                if(item.split(" ")[0] === "Input:") {
                                    return (
                                        <li key={index} className={`${index===0? "mt-1":"mt-4"}`}>{item}</li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={index} className="mt-1">{item}</li>
                                    )
                                }
                            })
                        ) : null
                        
                        }
                        </ul>
                    </div>
                    <div className="constraints">
                        <ul>
                        <strong>Constraints</strong>
                        {
                            Object.keys(question).length>0 ? (
                            question.constraints.map((item,index) => {
                                return (
                                    <li key={index} className="mt-1">{item}</li>
                                )
                            })
                        ) : null
                        }
                        </ul>
                    </div>
                </div>
                <div className="code-editor w-1/2 flex-col">
                    <div className="model mb-1">
                        <ul className="flex space-x-2 justify-end">
                            {
                                Object.keys(language).map((lang,index) => {
                                    return ( 
                                    <li id={lang} 
                                        key={index} 
                                        className={`inline-block w-fit border-2 px-2 py-1 rounded hover:cursor-pointer ${model===(lang.toLowerCase())? "bg-yellow-600": ""}`}
                                        onClick={handleChangeModel}
                                    >
                                        {lang}
                                    </li> )
                                })
                            }
                        </ul>
                    </div>
                    <div className="editor text-gray-200 w-full grow-1" style={{ height: "50vh"}}>
                        <Editor 
                            width="100%"
                            height="100%"
                            defaultValue={value}
                            language={model} 
                            value={value} 
                            theme="vs-dark" 
                            loading="Loading..." 
                            onMount={handleOnMount}
                            onChange={(text) => setValue(text)}
                            className=""
                        />
                        
                    </div>
                    <div className="output" >
                        <Output sourceCode={value} currentModel={model}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeEditor