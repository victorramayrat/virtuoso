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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#92A2F5',
    padding: '10px',
    height: '95vh'
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
    margin: '24px auto',
    padding: '16px 32px',
    display: 'inline-block',
    size: 'large',
    textDecoration: 'none',
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
}));

export default function Splash() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={logo} alt="Virtuoso" className={classes.img} />
              <Typography variant="h3" component="h3" className={classes.typeHeader}>
                Virtuoso
              </Typography>
              <Typography variant="h6" component="h6" className={classes.typePar}>
                get evaluated at home and we'll tell you what to do next
              </Typography>
              <Link to="/chatai" className={classes.button}>Get Started</Link>
            </Grid>
          </Grid>
        </Paper>
      </div>
  );
}
