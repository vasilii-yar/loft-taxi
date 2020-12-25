import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import {connect} from "react-redux";
import {store} from "../../redux/store";
import {closeError} from "../../redux/modules/error/errorActions";
import "./ErrorMessageSnackbar.css";
import {withStyles} from "@material-ui/core";

const styles = {
    root: {
       color: "#f50057"
    },
};

const ErrorMessageSnackbar = (props) => {
    const handleClose = () => {
        store.dispatch(closeError());
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                open={props.isShow}
                onClose={handleClose}
                autoHideDuration={6000}
                message={props.errorMessage}
                ContentProps={{className: props.classes.root}}
            />
        </div>
    );

}

const mapStateToProps = (state) => {
    return (
        {
            isShow: state.error.isShow,
            errorMessage: state.error.errorMessage
        }
    )
}

export default connect(mapStateToProps)(withStyles(styles)(ErrorMessageSnackbar));