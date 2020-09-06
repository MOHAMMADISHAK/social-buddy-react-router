import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        backgroundColor: '#c9fee9',
        padding: theme.spacing(2),
        marginTop: "30px",
        marginLeft: '350px',
        maxWidth: 700,
    }
}));
const Comments = (props) => {
    const classes = useStyles();
    const { name, email, body } = props.co;
    const imageStyle = { display: "flex", alignItems: "center", justifyContent: "center" }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3} >
                    <Grid item xs={2} style={imageStyle}>
                        <img alt="complex" src="https://picsum.photos/80/105" />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography gutterBottom variant="subtitle1">
                            <p ><b>Name : </b>{name}</p>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <p className="font-color"><b>Email : </b>{email}</p>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <p>{body}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
export default Comments;