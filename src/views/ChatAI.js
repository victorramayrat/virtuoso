import React from 'react'
import {render } from 'react-dom'
import ButtonAppBar from '../components/ButtonAppBar'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import logo from '/static/nurse.svg'
import ButtonStyledPrimary from '../components/ButtonSyledPrimary'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  button: {
    color: '#f48fb1',
    border: '1px solid #FFFFFF',
    borderRadius: 6,
    color: 'white',
    padding: '16px 24px',
    textDecoration: 'none',
    fontFamily: 'Arial, Helvetica, sans-serif',
    position: 'absolute',
    right: '20px',
    top: '20px'
  }
}));

export default function ChatAI() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
      <Link to="/videoconf" variant="outlined" className={classes.button}>Skip to Nurse</Link>
      <iframe height="98%" width="100%" allow="microphone;" frameBorder="0" src="https://console.dialogflow.com/api-client/demo/embedded/d6a7496a-1549-44c4-9340-a63ed2f18ef2"></iframe>
      </div>
    </div>
  );
};
