import styles from '../../styles/Home.module.scss';
import CalendarContainer from '../Calendar/CalendarContainer';
import PopUp from '../PopUp/PopUp';
import { useEffect, useState } from 'react';

const Main = (props) => {
  const [popup, setPopup] = useState(false);

  useEffect(() => { 
    setPopup(props.status)
  },[props.status])

  return (<>
      <div className={styles.left}>
        <p className={styles.choose}>Choose the day for the meeting</p>
        <p className={styles.enc}>We encourage you to book your appointment online. This will save you time.</p>
      </div>
      <div className={styles.right}>
        <CalendarContainer />
      </div>
      <PopUp
        day = {props.day}
        month = {props.month}
        year = {props.year}
        title={'PopnUp Title'}
        onClose={() => props.Initialize(false)}
        isactive={popup}
      />
  </>)
}

export default Main;