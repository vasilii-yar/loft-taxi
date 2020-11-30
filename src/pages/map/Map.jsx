import React from 'react';
import AppContext from "../../util/AppContext";
import NavBar from "../../components/navbar/NavBar";
import MapBox from "../../components/mapbox/MapBox";

export default class Map extends React.Component {
    render() {
        return (
            <>
                <header>
                    <AppContext.Consumer>
                        {({navigateTo, logOut}) =>
                            <NavBar navigateTo={navigateTo} logOut={logOut}/>}
                    </AppContext.Consumer>
                </header>
                <main>
                    <section>
                        <MapBox/>
                    </section>
                </main>
            </>
        );
    }
}