import React from 'react'
import {render } from 'react-dom'
import ButtonAppBar from '/components/ButtonAppBar'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import logo from '/static/nurse.svg'
import ButtonStyledPrimary from '/components/ButtonSyledPrimary'
// import Link from '@material-ui/core/Link'
import ChatAI from '/views/ChatAI'
import Splash from '/views/Splash'
import VideoConf from '/views/VideoConf'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#92A2F5',
    padding: '10px',
    height: '95vh'
  },
  container: {
    textAlign: 'center'
  },
  img: {
    padding: '12px',
    margin: '80px auto 12px',
    display: 'block'
  },
  typeHeader: {
    textTransform: 'uppercase',
    display: 'block',
    textAlign: 'center',
    fontWeight: '300',
    color: '#FFFFFF'
  },
  typePar: {
    display: 'block',
    textAlign: 'center',
    fontWeight: '300',
    padding: '24px',
    fontSize: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#FFFFFF'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    padding: '16px 32px',
    size: 'large',
    position: 'absolute',
    top: '460px',
    textDecoration: 'none',
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <div className={classes.container}>
          <Route exact path="/" component={Splash} />
          <Route path="/chatai" component={ChatAI} />
          <Route path="/videoconf" component={VideoConf} />
        </div>
      </Router>
    </div>
  );
}
