import moment from 'moment';
import style from './PopUp.module.scss';

const PopUp = (props) => {
    const date = new Date(props.year, props.month, props.day, 0, 0, 0, 0)

    return (
        <div className={`${style.wrapper} ${props.isactive ? style.open : style.closed}`} style={{...props.style}}>
            <div className={style.body}>
                <div className={style.clpopup}><button onClick={() => props.onClose()}>x</button></div>
                <div className={style.inputs}>
                    <label className={style.labelfont}><b>Month</b></label>
                    <label className={style.labelfont}><b>Day</b></label>
                </div>
                <div className={style.inputs}>
                    <input disabled className={style.inputs} placeholder={moment(date).format("MMMM")} type={'text'}></input>
                    <input disabled className={style.inputs} placeholder={`${props.day}th ${moment(date).format('dddd')}`} type={'text'}></input>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default PopUp;