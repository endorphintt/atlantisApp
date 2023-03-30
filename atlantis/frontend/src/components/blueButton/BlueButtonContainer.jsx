import React from "react"
import './BlueButton.scss'
import BlueButton from "./BlueButton";
import { UpdateMenuActionCreator } from "../../redux/menuReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { 
        activeMenuItem: state.menuPage.activeMenuItem
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        updateMenu: (link) => {
            dispatch(UpdateMenuActionCreator(link.id))
        }
    }
}

const mergeProps = (stateProps, dispatchToProps, ownProps) => {
    return {
      ...ownProps,
      ...dispatchToProps,
      ...stateProps,     
    };
};
  

const BlueButtonContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(BlueButton)

export default BlueButtonContainer;