import { Link } from "react-router-dom"

const LargeBoxLink = ({Title,Description,BtnDesc}) => {
    return (
        <>
            <div className="h-36 w-1/3 bg-green-500 rounded-md flex-col p-4 text-white">
                <p className="text-2xl tracking-tighter leading-6">{Title}</p>
                <p className="text-xs">{Description}</p>
                <Link to={"/"}><p className="w-fit h-fit py-1 px-2 text-sm text-black rounded-md bg-white mt-4">{BtnDesc}</p></Link>
            </div>
        </>
    )
}

export default LargeBoxLink