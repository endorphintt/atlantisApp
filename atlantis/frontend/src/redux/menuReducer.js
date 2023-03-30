const UPDATE_MENU = 'UPDATE_MENU'

const initialState = {
    ActiveMenuItem: '01'
}

const menuReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case UPDATE_MENU:
            newState = {...state}
                newState.menuIsOpened = action.menuIsOpened
            return newState
        default:
            return state
    }
}

export const UpdateMenuActionCreator = (id) => {
    return ({
        type: UPDATE_MENU,
        ActiveMenuItem: id,
    })
}

export default menuReducer;