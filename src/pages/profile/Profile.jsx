import React from 'react';
import AppContext from "../../util/AppContext";
import NavBar from "../../components/navbar/NavBar";

export default class Profile extends React.Component {
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

                    </section>
                </main>
            </>
        );
    }
}