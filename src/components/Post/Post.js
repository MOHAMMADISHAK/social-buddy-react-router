import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './Post.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: '270px',
    maxWidth: 500,

  }

}));

const Post = (props) => {

  const classes = useStyles();
  const { id, title, body } = props.post;
  const history = useHistory();

  const handleClick = (postId) => {
    const url = `/post/${postId}`;
    history.push(url);
  }
  return (
    <div className={classes.root}>
      <Box className="box-margin" width="80%" bgcolor="grey.300" p={1} my={0.5}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <h5>Post No :{id}</h5>
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    <h3 className="font-color">{title}</h3>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <p>{body}</p>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button onClick={() => handleClick(id)} variant="contained" color="primary">
                    See More
                </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};
export default Post;