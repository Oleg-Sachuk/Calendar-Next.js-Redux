import React from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { Initialize, GetDate } from '../../redux/popup-reducer';
import { compose } from 'redux';

class MainAPIComponent extends React.Component {

    render() {
        console.log("status: ",this.props.day);
        return <>
            <Main
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
    console.log("map:",state.popup.initialized);
    return {
        status: state.popup.initialized,
        day: state.popup.day,
        month: state.popup.month,
        year: state.popup.year
    }
}

export default compose(connect(mapStateToProps, { Initialize, GetDate }))(MainAPIComponent);