import React from 'react'
import {render } from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import video from '/static/videoconf.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ButtonAppBar from '../components/ButtonAppBar'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  img: {
    width: '100%'
  }
}));

export default function ChatAI() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
      <ButtonAppBar />
      <img src={video} alt="Video Conference" className={classes.img} />
      </div>
    </div>
  );
};
