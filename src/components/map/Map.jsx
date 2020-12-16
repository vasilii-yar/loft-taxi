import React from 'react';
import NavBar from "../navbar/NavBar";
import MapBox from "./MapBox";

export default class Map extends React.Component {
    render() {
        return (
            <>
                <header>
                    <NavBar/>
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