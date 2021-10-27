import { TextField, Button } from '@material-ui/core';
import useStyles from './style';

function Search({ searchPokemon, setSearchPokemon, handleFindPokemon }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                label="Search New Pokemon"
                variant="outlined"
                // required
                // error={false}
                // helperText="Insert a valid character"
                value={searchPokemon}
                onChange={e => setSearchPokemon(e.target.value)}
            />
            <Button
                variant="contained"
                color="secondary"
                onClick={handleFindPokemon}
            >
                Search
            </Button>
        </div>
    )
}

export default Search;