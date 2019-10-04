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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#999'
  },
  button: {
    margin: theme.spacing(1),
  },
  img: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <ButtonAppBar />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <img src={logo} alt="Virtuoso" />
          </Grid>
          <ButtonStyledPrimary />
        </Grid>
      </div>
    </div>
  );
};

render(
  <App />, document.getElementById('root')
)