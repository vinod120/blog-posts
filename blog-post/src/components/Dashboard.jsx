import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import logo from '../assests/logo.png'
import './styles.css';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import mainLogo from '../assests/main_logo.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        marginBottom: theme.spacing(1)
      },
  }));
  
function Dashboard() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    // const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const comments = [
        {
            "username": "vinod",
            "text": "hi"
        },
        {
            "username": "qwerty",
            "text": "qwerty"
        }
    ]

    const postComment = (e) => {
        e.preventDefault();
        const obj = {
            username: "loggedin username",
            text: comment,
        }
        console.log(obj)
    };
    const isAuth = useSelector(state=>state.login.isAuth)
    console.log(isAuth)
    
    return (
        <>
            {
                // !isAuth ? 
                // <div>
                //     <Redirect to='/login' />
                // </div>
                // :
                <div style={{padding:'80px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', }}>
                        <div>
                            <img src={mainLogo} alt="main_logo" width="200px"/>
                        </div>
                        <Link to='/createPost' style={{textDecoration:'none'}}>
                            <Button variant="contained" color="secondary">
                                Create Post
                            </Button>
                        </Link>
                    </div>
                    <div style={{textAlign:'center', color: '#323d47', letterpacing: '.5px', marginBottom:'30px'}}>
                        <h1>SalesBlink Blog</h1>
                        <p>Sales, Cold Emails and everything in between...</p>
                    </div>
                    <Grid container spacing={3} >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid item xs={12} md={6} lg={4} justify="space-between">
                            <div className='post'>
                                <div className='post__header'>
                                    <Avatar
                                        className='post__avatar'
                                        alt="vinod"
                                        src=''
                                    />
                                    <h3>vinod</h3>
                                </div>
                                <img className='post__image' src={logo} alt='post' />
                                <h4 className='post__text'>
                                    {' '}
                                    <strong>vinod</strong> hi
                                </h4>
                                <Divider />
                                <strong>Commnents</strong>
                                {
                                    <div className='post__comments'>
                                        {comments.map((comment) => (
                                            <p>
                                                <strong>{comment.username}</strong> {comment.text}
                                            </p>
                                        ))}
                                    </div>
                                }
                                <div>
                                    <button>like</button>
                                </div>
                                {true && (
                                    <form className='post__commentBox'>
                                        <input
                                            className='post__input'
                                            type='text'
                                            placeholder='Add a comment...'
                                            value={comment}
                                            // value="vinod"
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                        <button
                                            className='post__button'
                                            // disabled={!comment}
                                            onClick={postComment}
                                            type='submit'
                                        >
                                            Post
                                        </button>
                                    </form>
                                )}
                            </div>
                        </Grid>
                        ))}
                    </Grid>
                </div>
            }
        </>
    )
}

export default Dashboard
