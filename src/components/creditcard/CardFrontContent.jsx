import React from 'react';
import {Box} from "@material-ui/core";
import {MCIcon} from "loft-taxi-mui-theme";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

export default class CardFrontContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: "",
            date: ""
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        if (name === "cardNumber") {
            this.handleCardNumberInput(value);
        } else {
            this.setState(
                {[name]: value}
            )
        }
    }

    handleCardNumberInput = (value) => {
        if ((value.length % 4) === 0) {
            value += " ";
        }
        this.setState({cardNumber: value});
    }

    render() {
        return (
            <>
                <Box component="span">
                    <MCIcon/>
                </Box>
                <FormControl fullWidth>
                    <InputLabel htmlFor="cardNumber">Номер карты</InputLabel>
                    <Input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        onChange={this.handleChange}
                        fullWidth
                        pattern="[0-9]*"
                        inputmode="numeric"
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="date">Пользователь</InputLabel>
                    <Input
                        id="date"
                        name="date"
                        type="text"
                        onChange={this.handleChange}
                        fullWidth
                    />
                </FormControl>
            </>
        );
    }
}