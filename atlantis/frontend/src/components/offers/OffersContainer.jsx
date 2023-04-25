import React from "react";
import { connect } from "react-redux";
import { UpdateOffersActionCreator } from "../../redux/offersReducer";
import Offers from "./Offers";

const mapStateToProps = (state) => {
    return { 
        offersActiveItem: state.offersPage.offersActiveItem,
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        updateOffersItem: (id) => {
            dispatch(UpdateOffersActionCreator(id))
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
  

const BlueButtonContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Offers)

export default BlueButtonContainer;