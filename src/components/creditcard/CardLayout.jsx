import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";

export const CardLayout = ({children}) => {
    return (
        <Paper className="card-layout">
            <Box className="fields-layout">
                {children}
            </Box>
        </Paper>
    );
}