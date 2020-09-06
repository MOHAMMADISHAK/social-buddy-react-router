import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './PostDetail.css'
import Comments from '../Comments/Comments';
import users from '../fakeData/user';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#d6feee',
    padding: theme.spacing(2),
    marginTop: '50px',
    marginLeft: '350px',
    maxWidth: 700,
  }
}));

const PostDetail = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const [user, setUser] = useState(users);

  const [post, setPost] = useState({});
  const { id, title, body } = post;
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [])

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [])

  return (
    <div className={classes.root}>
      <div>
        <h1 className="title">Details of Post no : {id}</h1>
      </div>
      <Paper className={classes.paper}>
        <Grid className="grid-margin" container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <h3>{title}</h3>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <p>{body}</p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <div>
        <h3 className="title">Comment Details</h3>
      </div>
      <div>
        {
          comments.map(co => <Comments co={co} ></Comments>)
        }
      </div>
    </div>
  );
};
export default PostDetail;