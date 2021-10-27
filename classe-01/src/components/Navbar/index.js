import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './style';

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar className={classes.navbar}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Pokedex
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}