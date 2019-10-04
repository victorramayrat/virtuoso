import React from 'react'
import { styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import ChatAI from '../views/ChatAI'

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '40px auto 0',
  size: 'large'
});

export default function ButtonStyledPrimary() {
  return (
    <React.Fragment>
      <MyButton href={ChatAI} >Get Started</MyButton>
    </React.Fragment>
  );
}