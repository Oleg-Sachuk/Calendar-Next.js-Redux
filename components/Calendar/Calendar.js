import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import style from './Calendar.module.scss';

const Calendar = (props) => {
    const date = new Date();
    let days = useRef([]);
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());

    const GetQurData = (day) => {
        props.GetDate(day, month, year)
        props.Initialize(true)
    }

    useEffect(() => {
        if (month > 12) {
            setYear(year + 1)
            setMonth(1)
        } else if (month < 0) {
            setYear(year - 1)
            setMonth(12)
        }
        let arr = [];
        let skip = [];
        let firstday = new Date(year, month, 1).getDay()
        let daysInMonth = new Date(year, month+1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            arr.push(i);
        }
        console.log("Arr: ",month,daysInMonth, arr);
        for (let i = 1; i <= firstday; i++) {
            skip.push("");
        }
        let result = skip.concat(arr);
        days.current = result.map(day => {
            if (`${day}-${month}-${year}` !== `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`) {
                return <form onClick={() => GetQurData(day) }>
                    <div className={style.date}>{day}</div>
                </form>
            } else return <form onClick={() => GetQurData(day) }><div className={style.date, style.actual}>{day}</div></form>
        })
    }, [month, year])

    return (
        <div>
            <div className={style.calendar}>
                <button className={style.prev} onClick={() => setMonth(month - 1)}>{"<"}</button>
                <span className={style.date}>{moment().month(month-1).format("MMMM")} {year}</span>
                <button className={style.next} onClick={() => setMonth(month + 1)}>{">"}</button>
                <hr />
                <div className={style.days}>
                    {days.current}
                </div>
                <hr />
                <div className={style.week}>
                    <div>S</div> <div>M</div>
                    <div>T</div> <div>W</div>
                    <div>T</div> <div>F</div>
                    <div>S</div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Calendar;