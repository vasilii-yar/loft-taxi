import React from 'react';
import NavBar from "../navbar/NavBar";
import MapBox from "./MapBox";
import {connect} from "react-redux";
import RegistrationRedirectForm from "./RegistrationRedirectForm";
import RouteForm from "./RouteForm";
import {fetchProfileData} from "../../redux/modules/profile/profileActions";

class Map extends React.Component {

    componentDidMount() {
        this.props.fetchProfileData();
    }

    render() {
        const Form = this.props.isCardDataFilled ? RouteForm : RegistrationRedirectForm
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
            isCardDataFilled: state.profile.isCardDataFilled
        }
    )
}

export default connect(
    mapStateToProps,
    {fetchProfileData}
    )(Map);