const UPDATE_MENU = 'UPDATE_MENU'

const initialState = {
    menuIsOpened: false
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

export const UpdateMenuActionCreator = (bool) => {
    return ({
        type: UPDATE_MENU,
        menuIsOpened: bool,
    })
}

export default menuReducer;