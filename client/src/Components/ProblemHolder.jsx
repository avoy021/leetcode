import { Link } from "react-router-dom"

const ProblemHolder = ({Id,Title}) => {
    return (
        <>
            <div className="holder flex w-3/4 justify-around text-white mb-10">
                <div className="status grow-0 shrink-0 basis-24 pl-2">Open</div>
                <div className="title grow hover:cursor hover:text-blue-400">
                    <Link to={`/problems/${Id}/${Title}`}>{Id + '. ' +Title}</Link>
                </div>
                <div className="solution grow-0 shrink-0 basis-24 pl-2">Link</div>
                <div className="acceptance grow-0 shrink-0 basis-32">50%</div>
                <div className="difficulty grow-0 shrink-0 basis-32">Medium</div>
                <div className="frequency grow-0 shrink-0 basis-28">50%</div>
            </div>
        </>
    )
}

export default ProblemHolder