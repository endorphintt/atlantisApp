const UPDATE_MENU = 'UPDATE_MENU'

const initialState = {
    menuIsOpened: false
}

const menuReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case UPDATE_MENU:
            newState = {...state}
            if(newState.menuIsOpened){
                newState.menuIsOpened = false
            } else {
                newState.menuIsOpened = true
            }
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