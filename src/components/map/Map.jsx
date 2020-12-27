import React from 'react';
import NavBar from "../navbar/NavBar";
import MapBox from "./MapBox";
import {connect} from "react-redux";
import RegistrationRedirectForm from "./RegistrationRedirectForm";
import RouteForm from "./RouteForm";
import {fetchProfileData} from "../../redux/modules/profile/profileActions";
import {getCardDataState} from "../../redux/modules/profile/profileReducer";
import {getIsOrderMake} from "../../redux/modules/route/routeReducer";
import OrderSuccessForm from "./OrderSuccessForm";

class Map extends React.Component {

    componentDidMount() {
        this.props.fetchProfileData();
    }

    render() {
        let Form;
        if (this.props.isCardDataFilled) {
            Form = this.props.isOrderMake ? OrderSuccessForm : RouteForm;
        } else {
            Form = RegistrationRedirectForm;
        }

        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <main>
                    <section>
                        <MapBox/>
                        <Form/>
                    </section>
                </main>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {
            isCardDataFilled: getCardDataState(state),
            isOrderMake: getIsOrderMake(state)
        }
    )
}

export default connect(
    mapStateToProps,
    {fetchProfileData}
)(Map);