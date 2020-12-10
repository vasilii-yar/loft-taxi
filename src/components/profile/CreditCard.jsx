import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./CardLayout.css"
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {fetchProfileData, saveProfileData} from "../../redux/modules/profile/profileActions";

class CreditCard extends React.Component {
    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: ""
    };

    handleInputFocus = (e) => {
        this.setState({focus: e.target.name});
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const cardData = {
            cardNumber: this.state.number,
            expiryDate: this.state.expiry,
            cardName: this.state.name,
            cvc: this.state.cvc,
            token: ""
        }
        this.props.saveProfileData(cardData);
    }

    componentDidMount() {
        this.props.fetchProfileData();
        this.setState({
            cvc: this.props.cvc,
            expiry: this.props.expiryDate,
            name: this.props.cardName,
            number: this.props.cardNumber
        })
    }

    render() {
        return (
            <Paper className="credit-card-layout">
                <Box id="PaymentForm">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <form onSubmit={this.handleSubmit} className="input-fields">
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="number">Номер карты</InputLabel>
                                    <Input
                                        id="number"
                                        name="number"
                                        type="number"
                                        value={this.state.number}
                                        onChange={this.handleInputChange}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="name">Имя владельца</InputLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row">
                                    <Grid item xs={5}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="expiry">Срок действия</InputLabel>
                                            <Input
                                                id="expiry"
                                                name="expiry"
                                                type="string"
                                                value={this.state.expiry}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={5}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="cvc">CVC</InputLabel>
                                            <Input
                                                id="cvc"
                                                name="cvc"
                                                type="number"
                                                value={this.state.cvc}
                                                onChange={this.handleInputChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="save-button">
                                    <Button variant="contained" color="primary" type="submit">
                                        Сохранить
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        );
    }
}

export default connect(
    (state) => ({
        cardNumber: state.profile.cardNumber,
        expiryDate: state.profile.expiryDate,
        cardName: state.profile.cardName,
        cvc: state.profile.cvc
    }),
    {saveProfileData, fetchProfileData}
)(CreditCard);