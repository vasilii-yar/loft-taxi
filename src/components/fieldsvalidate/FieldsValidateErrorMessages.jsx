import React from 'react';
import "./FieldsValidateErrorMessages.css"
import Typography from "@material-ui/core/Typography";

export const FieldsValidateErrorMessages = ({error}) => {
    if (error) {
        switch (error.type) {
            case "required":
                return <Typography className="validate-error-message">Необходимо заполнить!</Typography>;
            case "minLength":
                return <Typography className="validate-error-message">Слишком маленькая длинна!</Typography>;
            case "pattern":
                return <Typography className="validate-error-message">Значение не соответствует шаблону!</Typography>;
            case "min":
                return <Typography className="validate-error-message">Указанное значение меньше минимального!</Typography>;
            case "validate":
                return <Typography className="validate-error-message">Значение заполнено неверно!</Typography>;
            default:
                return null;
        }
    }

    return null;
}