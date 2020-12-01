import React from 'react';
import NavBar from "../../components/navbar/NavBar";

export default class Profile extends React.Component {
    render() {
        return (
            <>
                <header>
                    <NavBar navigateTo={this.props.navigateTo}/>
                </header>
                <main>
                    <section>

                    </section>
                </main>
            </>
        );
    }
}