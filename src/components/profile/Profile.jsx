import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import CreditCard from "../../components/profile/CreditCard";
import {Box} from "@material-ui/core";

export default class Profile extends React.Component {
    render() {
        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <main>
                    <section>
                        <Box>
                            <CreditCard/>
                        </Box>
                    </section>
                </main>
            </>
        );
    }
}