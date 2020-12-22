import React from 'react';
import "./FieldsValidateErrorMessages.css"
import Typography from "@material-ui/core/Typography";

export const FieldsValidateErrorMessages = ({error}) => {
    if (error) {
        switch (error.type) {
            case "required":
                return <Typography className="validate-error-message">Необходимо заполнить!</Typography>;
            case "minLength":
                return <Typography className="validate-error-message">Your last name need minmium 2 charcaters</Typography>;
            case "pattern":
                return <Typography className="validate-error-message">Enter a valid email address</Typography>;
            case "min":
                return <Typography className="validate-error-message">Minmium age is 18</Typography>;
            case "validate":
                return <Typography className="validate-error-message">Username is already used</Typography>;
            default:
                return null;
        }
    }

    return null;
}