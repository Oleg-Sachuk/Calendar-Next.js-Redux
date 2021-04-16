import React from 'react';
import Calendar from './Calendar';
import { connect } from 'react-redux';
import { Initialize, GetDate } from '../../redux/popup-reducer';
import { compose } from 'redux';

class CalendarAPIComponent extends React.Component {

    // componentDidUpdate() {
    //     console.log(this.props.status);
    // }

    render() {
        return <>
            <Calendar
                day={this.props.day}
                month={this.props.month}
                year={this.props.year}
                status={this.props.status}
                Initialize={this.props.Initialize}
                GetDate={this.props.GetDate}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    console.log("calmap",state.popup.initialized);
    return {
        status: state.popup.initialized,
        day: state.popup.day,
        month: state.popup.month,
        year: state.popup.year
    }
}

export default compose(connect(mapStateToProps, { Initialize, GetDate }))(CalendarAPIComponent);