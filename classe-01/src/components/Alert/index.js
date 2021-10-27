import React from 'react';
import useStyles from './style';
import Alert from '@material-ui/lab/Alert';

function CustomAlert({ pokemon, searchPokemon, open }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {<Alert position="fixed" variant="filled" severity="error">
                Not Found!
            </Alert>}
            {/* {<Alert position="fixed" variant="filled" severity="info">
                Please, insert the name of Pokemon into "Search New Pokemon"!
            </Alert>}
            {(pokemon && searchPokemon) && <Alert position="fixed" variant="filled" severity="success">
                {`You found a Wild ${pokemon.name}!`}
            </Alert>} */}
        </div>
    );
}

export default CustomAlert;