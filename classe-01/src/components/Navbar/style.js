import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: 10
    },
    navbar: {
        backgroundImage: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,0,0,1));'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    }
}));