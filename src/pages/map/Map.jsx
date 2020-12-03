import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import MapBox from "../../components/mapbox/MapBox";

export default class Map extends React.Component {
    render() {
        return (
            <>
                <header>
                    <NavBar navigateTo={this.props.navigateTo}/>
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