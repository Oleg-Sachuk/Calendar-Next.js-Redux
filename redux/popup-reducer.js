let initialstate = {
    initialized: false,
    day: null,
    month: null,
    year: null
}

const popupReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET-INITIALIZED': {
            return {
                ...state,
                initialized: action.status
            }
        }
        case 'GET-DATE': {
            return {
                ...state,
                day: action.date.dataday,
                month: action.date.datamonth,
                year: action.date.datayear
            }
        }
        default: return state;
    }
}

export const InitializeStatus = (status) => ({
    type: 'GET-INITIALIZED', status
})

export const InitializeDate = (date) => ({
    type: 'GET-DATE', date
})

export const Initialize = (trigger) => {
    console.log(trigger);
    return async (dispatch) => {
        await dispatch(InitializeStatus(trigger))
    }

}

export const GetDate = (dataday, datamonth, datayear) => {
    return async (dispatch) => {
        await dispatch(InitializeDate({dataday, datamonth, datayear}))
    }

}

export default popupReducer;