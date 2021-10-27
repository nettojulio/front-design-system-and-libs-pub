import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './style';

function CustomCard({ name, abilities, image }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader className={classes.cardHeader} title={name} />
            <CardMedia
                component="img"
                className={classes.media}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography variant="h6">
                    Abilities
                </Typography>
                {abilities && abilities.map(item => (
                    <Typography variant="body2" key={item.ability.name} color="textSecondary" component="p">
                        {item.ability.name}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

export default CustomCard;