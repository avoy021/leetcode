import javascript_compile from "../../initialBoilerplates/javascript_compile.js";
import problems from "../../leetcodeProblems.js"

const info = problems.find(problem => problem.id==="1"); 
const data = {
    DESCRIPTION: info.title,
    FUNCTION_NAME: "findSum",
    PARAMETERS: ["a","b"]
}

const boilerplate = javascript_compile(data);

export default boilerplate