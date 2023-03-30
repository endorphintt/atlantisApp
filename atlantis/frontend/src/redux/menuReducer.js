const UPDATE_MENU = 'UPDATE_MENU'

const initialState = {
    activeMenuItem: '01'
}

const menuReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case UPDATE_MENU:
            newState = {...state}
                newState.activeMenuItem = action.activeMenuItem
            return newState
        default:
            return state
    }
}

export const UpdateMenuActionCreator = (id) => {
    return ({
        type: UPDATE_MENU,
        activeMenuItem: id,
    })
}

export default menuReducer;