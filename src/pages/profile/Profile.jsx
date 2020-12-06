import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import {CardLayout} from "../../components/creditcard/CardLayout";
import CardFrontContent from "../../components/creditcard/CardFrontContent";

export default class Profile extends React.Component {
    render() {
        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <main>
                    <section>
                        <CardLayout>
                            <CardFrontContent/>
                        </CardLayout>
                    </section>
                </main>
            </>
        );
    }
}