import {Calendar as ReactCalender} from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import './date.css'

const Calendar = () => {
    const presentDate = new Date();

    return (
        <>
            <div className="calendar text-center bg-black w-4/5 m-auto rounded p-4">
                <ReactCalender calendarType={"gregory"}  
                    tileClassName={({activeStartDate,date,view}) => 
                        (date.getDate() === presentDate.getDate() && date.getMonth()===presentDate.getMonth() && date.getFullYear()===presentDate.getFullYear()) ? 'current' : ''
                    } 
                    className='highlight space-2'
                    prev2Label='' next2Label='' showNavigation='false'
                    minDetail='month'
                />
            </div>
        </>
    )
}

export default Calendar